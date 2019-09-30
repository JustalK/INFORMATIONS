# How to export and import mongo DB

For export all the collections :
```
mongodump -d rumarocket_dev -o export.json
mongodump --db=bounty_dev --collection=noteCategoryV3 --out=datas/
```

And then, I can import everything with this command : 
```
mongorestore -d rumarocket_dev export.json
```

If I want only one db : 
```
mongorestore --db=bounty_dev --collection=noteCategoryV3 datas/bounty_dev/noteCategoryV3.bson
mongorestore -d rumarocket_dev -c Name_of_collection xxxxx.bson
```