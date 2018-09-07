# How to add an admin
Some command for adding an admin throught SSH

Add a new user
```
$ sudo adduser newuser
$ sudo adduser newuser --disabled-password
```

Connect like this user
```
$ sudo su - newuser
```

Creating the file for adding the SSH inside at the root of the server
```
$ mkdir .ssh
$ chmod 700 .ssh
$ touch .ssh/authorized_keys
$ chmod 600 .ssh/authorized_keys
$ nano .ssh/authorized_keys
```

If I want to resert the certficat of the ssh connection on linux
```
$ ssh-keygen -R  kevin@54.213.111.151
```






