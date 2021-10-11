# How to export and import mongo DB

For export all the collections :
```
mongodump -d server_api -o export_backup.json
mongodump --db=bounty_dev --collection=noteCategoryV3 --out=datas/
```

And then, I can import everything with this command :
```
mongorestore -d server_api export.json
```

If I want only one db :
```
mongorestore --db=bounty_dev --collection=noteCategoryV3 datas/bounty_dev/noteCategoryV3.bson
mongorestore -d rumarocket_dev -c Name_of_collection xxxxx.bson
```
