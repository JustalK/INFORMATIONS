# How to install VPN on ubuntu ?

## https://windscribe.com/

Visit the website windscribe and create an account for free. If you do not put your email, the data will be limited to 2Go.


Add the Windscribe signing key to apt
```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key FDC247B7
```

Add the repository to your sources.list
```
echo 'deb https://repo.windscribe.com/ubuntu bionic main' | sudo tee /etc/apt/sources.list.d/windscribe-repo.list
```

Run apt-get update
```
sudo apt-get update
```

Install windscribe-cli
```
sudo apt-get install windscribe-cli
```

Login to Windscribe
```
windscribe login
```

Connect to Windscribe
```
windscribe connect
```

Disconnect to Windscribe
```
windscribe disconnect
```

