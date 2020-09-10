# How to run python script on nodejs

## Using a python shell package

We can use this package to run python code :
https://www.npmjs.com/package/python-shell

```
import {PythonShell} from 'python-shell';

PythonShell.runString('x=1+1;print(x)', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
```

I try to use this python module that does not have any equivalent on javascript :
https://github.com/venomous/cloudscraper

I create a little script using this module
```
import cloudscraper

scraper = cloudscraper.create_scraper()  # returns a CloudScraper instance
# Or: scraper = cloudscraper.CloudScraper()  # CloudScraper inherits from requests.Session
print(scraper.get("https://www.animeland.us/dub/naruto-shippuden").text)  # => "<!DOCTYPE html><html><head>..."
```
