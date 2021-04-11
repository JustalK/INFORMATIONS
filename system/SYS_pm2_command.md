# Some useful command for pm2

## Removing all the log for "pm2 log"


```
rm -rf ~/.pm2/logs/*
```

## Start PM2 process with a name

```
pm2 start npm --name "transcom" -- start
```
