# How to export and import mongo DB

For export all the collections :
```
mongodump -d rumarocket_dev -o export.json
```

And then, I can import everything with this command : 
```
mongorestore -d rumarocket_dev export.json
```