# Update the pm2 version

## After an update of node version

When you switch node versions, you also switch the packages, so you need to reinstall pm2 on node update. Fortunately this does not happen very often.

```
You can install pm2 like this : npm install pm2@latest -g
For checking the version of pm2 : pm2 -v

For checking if the running version of pm2 has been updated : pm2 env 0 or pm2 show 0
If you see on the first line written in red : In-memory PM2 is out-of-date
You have to first update the pm2 version : pm2 update
Second, you have to now move the running pm2 to this version : pm2 updatePM2

```