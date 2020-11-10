# Install a server from scrach

## Check the version of ubuntu

Check what is the last LTS version of ubuntu and compare with the actual version.

```
lsb_release -a
```

## Upgrading to the last version of ubuntu 18

The last command can be quite long.

```
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
sudo apt-get autoremove
sudo apt install update-manager-core
sudo do-release-upgrade
```

After the server reboot, check again the version of the ubuntu

## Upgrading to the last version of ubuntu 20

For this version, since I was welcomed with "you are already use the last version", I needed to force with this command :

```
sudo do-release-upgrade -d
```

if the server is stucked on a command, you need to log out and this message show up `ssh_exchange_identification: read: Connection reset by peer`.
You will need to restart the server from the web command.


## Get the project

Clone an existing project on bitbucket

```
git clone https://yyyyy@bitbucket.org/xxxxx.git
```

if github is not installed :

```
apt-get install git
```

## Installing npm

Install the package manager

```
sudo apt install npm
```

if an error message `dpkg was interrupted` show up :

```
sudo dpkg --configure -a
```


## Installing the node legacy and check the version of node


The version of node should be the last one

```
sudo apt install nodejs-legacy
node -v

```

## Installing last version of nvm

Look the available version of nvm on the repository : https://github.com/nvm-sh/nvm
Then install the last version of nvm and restart the server for being able to use it.

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
sudo reboot 1
```

## Installing the last version of nodejs

Once restarted, check what is the lastest LTS version and install it

```
nvm list-remote
nvm install v14.0.0
```

## Installing the package of the project

```
npm i
```

## Trying the node application if it's run

If any error happen before the mongodb error because it has not been installed yet, it has to be fixed.

```
node index.js
or
npm start
```

## Installing mongoDB

Check on the official website the last version available : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

```
wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
```

It should return a OK.
Then create the list file

```
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
```

And update the local database of the package available on the server

```
sudo apt-get update
```

Finally, install the mongodb

```
sudo apt-get install -y mongodb-org
```

## Demon mongoDB and start it as a service

```
sudo mongod --fork --logpath /var/log/mongodb/mongod.log
```

if an error `child process failed, exited with error number 100` show up, the data folder does not exist

```
sudo mkdir /data/db
```

## Testing if the application is working fine

```
node index.js
```

Eveything at this moment should work fine.

## Install npm

```
npm install npm@latest -g
```

## Install pm2

```
sudo npm i -g pm2
```

## Start the application using pm2

```
pm2 start node index.js
```

## Enable the firewall and open the port

Install the firewall and check his status

```
sudo apt-get install ufw
sudo ufw status
```

Open the differents port.
Attention, dont forget to open the port ssh or it will be impossible to access the server

```
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw allow xxxx
```

The activate the firewall

```
sudo ufw enable
```

## Trying to access from outside (postman)

At this moment, it should be possible to access from outside.
If it does not work, the first thing to check if it's the application work on the server with curl :

```
curl http://localhost:5000/
```

If it work well, the port are the problem, try opening the port in the ip table :

```
iptables -I INPUT -p tcp --dport 3000 -j ACCEPT
```

Also check on the AWS if the port are open.

Check the config of the environnement file. Mb trying to replace localhost by 0.0.0.0
