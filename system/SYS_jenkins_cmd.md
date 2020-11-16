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

```
npm install
npm run seed
npm run build
pm2 start npm -- start
```

PS: For PM2, you have to be careful of the user using the script. With jenkins, the script is run by `jenkins` user.
So everything will be accesible with `sudo su jenkins`

4. On the project, activate `GitHub hook trigger for GITScm polling`

5. On the same page, activate GitHub Project with the url of the project `https://github.com/JustalK/PORTFOLIO/`

6. In Source Code Management, put the repository without the credential. URL : "https://github.com/JustalK/PORTFOLIO.git"

7. On github, in the setting of the project. Create a new hook with the following url : `http://ip-of-server:port/github-webhook/` with `application-json` and select `Let me select individual...` for pushes and pull

PS: For debugging the github event, you can use this page :
https://support.cloudbees.com/hc/en-us/articles/224621648-GitHub-Webhook-Troubleshooting

Create a logger for `ALL` of this LOG :

```
hudson.plugins.git.GitStatus ALL
com.cloudbees.jenkins.GitHubWebHook - ALL
org.jenkinsci.plugins.github - ALL
```

## Connecting to GITHUB

1. Install Plugin Blue Ocean : https://plugins.jenkins.io/blueocean/

2. Also the Github plugin for blueocean

3. Create a new pipeline

4. Follow the instruction and provide a token from github

5. Create a pipeline with shell script if needed
