# How to create a continuous development with the pipeline of bitbucket

## Create an SSH on the server

1. Connect to the server by SSH
2. Create an user

```
$ sudo adduser newuser --disabled-password
$ sudo su - newuser
$ mkdir .ssh
$ chmod 700 .ssh
```

2. Enter the command :

```
$ ssh-keygen
```

3. Press enter until you get the image of the SHH
4. List the contents of ssh to view the key files, you should see 3 files :

```
$ ls ~/.ssh
```

5. Start the agent with :

```
$ eval `ssh-agent`
```

6. Add the private key to ssh :

```
$ ssh-add ~/.ssh/id_rsa
```

if the file are too open, restrict the permission:

```
chmod 400 ~/.ssh/id_rsa
```

7. copy the public key inside the file *authorized_keys* in ~/.ssh/authorized_keys

```
$ cat ~/.ssh/id_rsa.pub
```

7. On bitbucket, go inside the *Repository setting* in *SSH key*
8. Activate the pipeline if asked
9. Copy/Paste the private key :

```
$ cat ~/.ssh/id_rsa
```

10. Copy/Paste the public key :

```
$ cat ~/.ssh/id_rsa.pub
```

11. Fetch the host by adding the public IP of the server :

```
$ dig +short myip.opendns.com @resolver1.opendns.com
```

12. Add the host
13. Come back on the server, and run :

```
$ ssh-copy-id -i ~/.ssh/id_rsa username_newuser@ip_server
```

And finally for testing, run this command :

```
$ ssh -i ~/.ssh/id_rsa username@IP
```

## Create a deploy script

1. On the server create a file **deploy.sh** with the following script inside :

```
##!/usr/bin/env bash

echo '## deploy.sh: Entering the directory on the server'
cd ./build
#echo '## deploy.sh: Pulling the code from repository'
#git pull origin master
echo '## deploy.sh: Installing the packages in any case there is new one'
npm install
#echo '## deploy.sh: Seeding the database'
npm run seed
#echo '## deploy.sh: Reloading the nodes'
pm2 reload all
```

## Allow the pull by SSH key

1. On bitbucket, Go inside the *Repository setting* in *Access Key*
2. Add you private key there, the label does not have importance :

```
$ cat ~/.ssh/id_rsa
```

3. Make sure you have define the permission properly for the SSH private key :

```
$ chmod 400 ~/.ssh/id_rsa
```

4. On the server, make sure you are using SHH for the git commands :

ssh://git@bitbucket.org/<workspace_ID>/<repo_name>.git

```
$ git remote set-url origin git@bitbucket.org:rumarocket2/actionsmicroservice.git
```

5.Do one git pull for accepting the fingerprint and checking you dont need the password anymore

## Change the name of the branch

1. On bitbucket, Go inside the *Repository setting* in *Deployement*
2. Change the following name of the branches (be careful, uppercase and lowercase has it's importance) :

```
Staging => development
Production => production
```

## Create the variable inside bitbucket

1. On bitbucket, Go inside the *Repository setting* in *Repository variables*
2. Configure the following variables :

```
SERVER_IP_DEV: The public IP of the server
SERVER_USER: The username of the ssh account chosen at the first step of this document
```

## Create a default bitbucket-pipelines.yml (OPTIONNAL)

1. Go on bitbucket in the project
2. Go in the tabs pipeline
3. Create a new pipeline

It should look like this :

```
# This is an example Starter pipeline configuration
# Use a skeleton to build, test and deploy using manual and parallel steps
# -----
# You can specify a custom docker image from Docker Hub as your build environment.
image: atlassian/default-image:2

pipelines:
  default:
    - parallel:
      - step:
          name: 'Build and Test'
          script:
            - echo "Your build and test goes here..."
      - step:
          name: 'Lint'
          script:
            - echo "Your linting goes here..."
      - step:
          name: 'Security scan'
          script:
            - echo "Your security scan goes here..."

    # The following deployment steps will be executed for each pipeline run. To configure your steps and conditionally deploy see https://support.atlassian.com/bitbucket-cloud/docs/configure-bitbucket-pipelinesyml/
    - step:
        name: 'Deployment to Staging'
        deployment: staging
        script:
          - echo "Your deployment to staging script goes here..."
    - step:
        name: 'Deployment to Production'
        deployment: production
        trigger: 'manual'
        script:
          - echo "Your deployment to production script goes here..."
```

## Modify or create the bitbucket-pipelines.yml

1. Create a **bitbucket-pipelines.yml** file at the root of your project

```
image: atlassian/default-image:2

pipelines:
  branches:  # Pipelines for the development
    development:
      - step:
           name: Deploy to dev
           deployment: production
           script:
             - echo "Deploying to dev environment"
             - pipe: atlassian/scp-deploy:0.3.3
               variables:
                 USER: $SERVER_USER
                 SERVER: $SERVER_IP_DEV
                 REMOTE_PATH: '/home/kevin'
                 LOCAL_PATH: $BITBUCKET_CLONE_DIR
             - pipe: atlassian/ssh-run:0.2.2
               variables:
                 SSH_USER: $SERVER_USER
                 SERVER: $SERVER_IP_DEV
                 COMMAND: 'bash ./deploy.sh'
```

## Modify the slack settings

In the setting of the project you can also add a notification system depending of if the push to production has been successful or not.
