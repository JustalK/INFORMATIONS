mongodump -d rumarocket_dev -o export.json

mongorestore -d rumarocket_dev export.json