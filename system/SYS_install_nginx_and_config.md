# Install multiple website on one server

## Install Nginx

1. Install the package

```
$ sudo apt-get install nginx
```

2.Enable nginx

```
$ sudo systemctl start nginx
$ sudo systemctl enable nginx
```

3. Check it's running

```
$ sudo systemctl status nginx
```

## Remove the default config

```
$ sudo unlink /etc/nginx/sites-enabled/default
```

## Create the config

Create a config file inside the */etc/nginx/sites-available*:

```
server {
    listen 80;

    server_name {dns};

    location / {
        proxy_pass http://localhost:{port};
    }
}
```

For example :

```
server {
    listen 80;

    server_name justalk.life;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Activate the config

To activate the config from site-available, just create a symbolic link to site-enabled.

```
ln -s /etc/nginx/sites-available/custom_server.conf /etc/nginx/sites-enabled/custom_server.conf
```

## Reload

For reloading the service

```
$ sudo service nginx reload
```

## Testing

For testing the config, you can use this command :

```
$ service nginx configtest
```

But it's better to use this one for having the log of the error :

```
$ nginx -t
```

## Errors

* Error 00001 :

```
nginx: [emerg] open() "/etc/nginx/sites-enabled/mysite.co.uk" failed (2: No such file or directory) in /etc/nginx/nginx.conf:62
```

This one is stupid and got me the first time. Just dont be a lazy person when you create the symbolic link between site-available and site-enabled. You cannot use relative path only absolute path :

```
ln -s /etc/nginx/sites-available/justalk.life.conf /etc/nginx/sites-enabled/justalk.life.conf
```
