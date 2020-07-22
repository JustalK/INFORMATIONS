# Change the node version

## Node version and PM2 (and mb some application)

By default, pm2 dont use the node version on nvm but either the local version of node : /usr/bin/node or /usr/local/bin/node.
It's a good trick to link this binaries to the nvm version with this command :

```
sudo ln -s /home/ubuntu/.nvm/versions/node/v12.13.0/bin/node /usr/local/bin/node
```

## Check config of nvm

```
nvm list
```

## Check the node version on the server and on the running app

```
For checking on the version on the server, use : node -v
For checking the node version, the app is using : console.log(process.version)

If you are using nvm for node, you can check that way : nvm list available
If it's does not show anything, you are using n. Check that way : n

```

## Updating the node version on the server and on the running app

```
For seeing all the node version available : nvm ls-remote
For updating the node version of nvm : nvm install 12.13.0
For using this version : nvm use 12.13.0
After you can check with : node -v

If you are using n, you can updating node like this : n 12.13.0
You can after check if the version has been choose with : n

Dont forget to restart the server and the pm2 after : sudo reboot
and : pm2 start index.js

```