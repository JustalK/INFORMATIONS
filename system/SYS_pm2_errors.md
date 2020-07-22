# Errors coming from pm2

## 413 : Request Entity Too Large

The error “413 – Request Entity Too Large” indicates that web server configured to restrict large file size. Nginx can be set to allow the maximum size of the client request body using client_max_body_size directive.

```
For changing the value of client_max_body_size, first go to the nginx config :
sudo nano /etc/nginx/nginx.conf

Change inside the bracket "http" :
client_max_body_size 2M;

Dont forget to realod the service after : 
sudo systemctl reload nginx.service

```