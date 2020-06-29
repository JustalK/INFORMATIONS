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


## Get the project

Clone an existing project on bitbucket

```
git clone https://yyyyy@bitbucket.org/xxxxx.git
```

## Installing npm

Install the package manager

```
sudo apt install npm
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

## Testing if the application is working fine

```
node index.js
```

Eveything at this moment should work fine.




