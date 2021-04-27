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

7. copy the public key inside the file *authorized_keys*

```
$ cat ~/.ssh/id_rsa.pub
```

7. Go inside the *Repository setting* in *SSH key*
8. You might be ask to activate the pipeline
9. Copy/Paste the private key :

```
$ cat ~/.ssh/id_rsa
```

10. Copy/Paste the public key :

```
$ cat ~/.ssh/id_rsa.pub
```

11. Fetch the host by adding the IP of the server
12. Add the host
13. Come back on the server, and run :

```
$ ssh-copy-id -i ~/.ssh/id_rsa username_newuser@ip_server
```

And finally for testing, run this command :

```
$ ssh -i ~/.ssh/id_rsa username@IP
```

## Create the variable inside bitbucket

1. Go on bitbucket in the project
2. Repository setting
3. Repository variable
4. Configure your variables there

## Create a default bitbucket-pipelines.yml

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

## Modify the bitbucket-pipelines.yml

Making the modification for a pipeline deploy on development brancg

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

## Create a deploy script on the server like this one

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

## Modify the slack settings

In the setting of the project you can also add a notification system depending of if the push to production has been successful or not.
