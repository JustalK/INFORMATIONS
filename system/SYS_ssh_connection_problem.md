# Cannot access the server through SSH

For some weird reason, the server cannot be access by SHH in the terminal of ubuntu but works fine with the terminl of amazon. Here, I put a list of the different reasons possible :

## Check the service is running

```
sudo service ssh status
```

## Check the iptable if ssh is listening

```
sudo iptables -L
```

The answer should contains :

```
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
```

## Try to stop the firewall and to connect

```
sudo ufw disable
sudo ufw status
```

## Try to connect on the server with ssh

```
ssh localhost
```

## Look on aws if the IP has not been change

- Go in the EC instance
- connect
- ssh
- And try to connect through the terminal with the alias
