# Timeout when pushing or connection too long

## Connection hanging out or timeout

When pushing something that is too big, the number or ressource sent throught git push might be too big.
In this case, increase the buffer with the command below:

```bash
$ git config --global http.postBuffer 157286400
```
