# Setup SSH Key

## Generate the SSH key on your computer

```
ssh-keygen -t rsa
```

## Copy public key to the the remote server

```
ssh-copy-id user@serverip
```

The `user` is the user of the remote server and the `server ip` is the ip of the remote server
