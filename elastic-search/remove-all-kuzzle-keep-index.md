# How to remove all kuzzle keep index

In a single script, you can get all the index and do a curl to remove the index:

```bash
$ curl -s "https://url.eu-west-3.es.amazonaws.com/_cat/indices" | grep "&customer.*_kuzzle_keep" | awk '{print $3}' | while read line ; do curl -X DELETE "https://url.eu-west-3.es.amazonaws.com/${line}?pretty"; done
```

Dont forget to replace the url in the command above