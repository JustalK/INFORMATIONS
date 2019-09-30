# How to increase the idle time for avoiding connection timeout ?

## Connect by ssh to the server and open the file sshd_config

```
sudo nano /etc/ssh/sshd_config
``` 

## Uncomment and change the values for "ClientAliveInterval" and "ClientAliveCountMax" :

```
The first one configures the server to send null packets to clients each 120 seconds and the second one configures the server to close the connection if the client has been inactive for 720 intervals that is 720*120 = 86400 seconds = 24 hours
```