# Change the node version

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

```