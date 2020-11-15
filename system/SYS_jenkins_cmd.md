# How to automatically deploy from github

## Install jenkins on the server

Visit the official webite installation for jenkins : https://www.jenkins.io/doc/book/installing/linux/

1. Install Java
```
sudo apt install openjdk-8-jdk
```

2. Install jenkins
``
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb https://pkg.jenkins.io/debian-stable binary/ > \
    /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins`
``

3. Check that the service is running
```
sudo systemctl status jenkins
```

4. You might have to change the port `HTTP_PORT=8081` inside the `/etc/default/jenkins`

5. Connect to `localhost:8081`, the password can be found with the command `sudo cat /var/lib/jenkins/secrets/initialAdminPassword` on the server

## For continuous delivery

1. Create an item `freestyle project`

2. Install the plugin `Post-build Actions`

3. Use the `LOG TEXT` area for trigger script after the build of jenkins

PS: For PM2, you have to be careful of the user using the script. With jenkins, the script is run by `jenkins` user.
So everything will be accesible with `sudo su jenkins`

## Connecting to GITHUB

1. Install Plugin Blue Ocean : https://plugins.jenkins.io/blueocean/

2. Also the Github plugin for blueocean

3. Create a new pipeline

4. Follow the instruction and provide a token from github

5. Create a pipeline with shell script if needed
