# How to bypass cloudflare for by example scraping a website

For one my project, I needed to bypass cloudflare for scrap the website. Cloudflare protected the website with a waiting time of 5s before showing the data.
From my research, I needed to find the real IP of the server.

## CloudFail

1. First solution, trying cloudflare

```
https://github.com/m0rtem/CloudFail
```

CloudFail is a tactical reconnaissance tool which aims to gather enough information about a target protected by Cloudflare in the hopes of discovering the location of the server. Unfortunately, the result did not give any result.

```
python3 cloudfail.py --target animeland.us
```
