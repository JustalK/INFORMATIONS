# Unable to access the url of git

## CAFile: none

When trying to git pull the content of a repository, this error appeared:

```
fatal: unable to access '<url>': server certificate verification failed. CAfile: none CRLfile: none
```

*The basic reason is that your computer doesn't trust the certificate authority that signed the certificate used on the Gitlab server. This doesn't mean the certificate is suspicious, but it could be self-signed or signed by an institution/company that isn't in the list of your OS's list of CAs. What you have to do to circumvent the problem on your computer is telling it to trust that certificate - if you don't have any reason to be suspicious about it.*

The solution is to desactivate the ssl:

```
$ git config --global http.sslVerify false
```
