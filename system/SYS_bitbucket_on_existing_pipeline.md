# How to create a continuous development with the pipeline of bitbucket

## Create an user

```
$ sudo adduser newuser --disabled-password
$ sudo passwd newuser
$ sudo su - newuser
$ mkdir .ssh
$ chmod 700 .ssh
```

## Create the server and install every package

Just one particularity, for nvm, you will have to also do it on the user precendly created.
Connect on the user and install nvm :

```
$ sudo su - newuser
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

Then exit and come back on root and restart the server

```
$ exit
$ sudo reboot 1
```

## Connect to an existing pipeline

1. Reconnect to the server by SSH on the user previously created

```
$ sudo su - newuser
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

7. On bitbucket, in *General*, *Access Key*, click **Add key**
8. Add the public key from your ssh

```
$ cat ~/.ssh/id_rsa.pub
```

9. On bitbucket, go inside the *Repository setting* in *SSH key*
10. copy the public key from bitbucket => pipeline => *public key* to the file *authorized_keys* in ~/.ssh/authorized_keys on the server

```
$ nano ~/.ssh/authorized_keys
```

11. Fetch the host by adding the public IP of the server :

```
$ dig +short myip.opendns.com @resolver1.opendns.com
```

12. Add the host
13. Come back on root user and edit the sshd config file :

```
$ exit
$ sudo nano /etc/ssh/sshd_config
```

Change the following data :

```
PasswordAuthentification: yes
```

Then reload the sshd service :

```
$ sudo service sshd reload
```

13. Come back on the user previously created, and run :

```
$ ssh-copy-id -i ~/.ssh/id_rsa username_newuser@ip_server
```

And finally for testing, run this command :

```
$ ssh -i ~/.ssh/id_rsa username@IP
```

14. If it work, change back the config of sshd_config to :

```
PasswordAuthentification: no
```

15. Then continue on the step : *Allow the pull by SSH key*

## Creacting the pipeline branch

1. Go on bitbucket, in the project then in *branches* and create a new branch
2. Go in the *Repository Setting*, pipeline and click on *Deployement*
3. Add the new branch with the same name as the branch created

## Edit the pipeline

1. Go in the project, in the development branch and edit the pipeline for adding the new branch :

```
pipelines:
  branches:  # Pipelines for the development
    staging:
      - step:
           name: Deploy to staging
           deployment: staging
           script:
             - echo "Deploying to staging environment"
             - pipe: atlassian/ssh-run:0.2.2
               variables:
                 SSH_USER: $SERVER_USER
                 SERVER: $SERVER_IP_STAGING
                 COMMAND: 'bash ./deploy.sh'
    development:
      - step:
           name: Deploy to dev
           deployment: development
           script:
             - echo "Deploying to dev environment"
             - pipe: atlassian/ssh-run:0.2.2
               variables:
                 SSH_USER: $SERVER_USER
                 SERVER: $SERVER_IP_DEV
                 COMMAND: 'bash ./deploy.sh'
```

## Create the pm2 running server

1. Git clone the project
2. Go inside the project and add the env file
3. Install the project with:

```
$ npm install
```

4. change the remote of the git :

```
$ git remote set-url origin git@bitbucket.org:rumarocket2/actionsmicroservice.git
```

5. Change to the right branch :

```
$ git fetch --all
$ git checkout mybranch
```

6. Run the pm2 with the start

```
pm2 start npm --name "transcom" -- start --exp-backoff-restart-delay=100
```

7. Create the deploy.sh at the root of the server for the user

```
##!/usr/bin/env bash

echo '## deploy.sh: Entering the directory on the server'
cd ./usersmicroservice
git pull
echo '## deploy.sh: Installing the packages in any case there is new one'
npm install
#echo '## deploy.sh: Seeding the database'
npm run seed
#echo '## deploy.sh: Reloading the nodes'
pm2 reload all
```
