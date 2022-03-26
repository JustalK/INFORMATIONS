# Export and import a database from Prisma1 Cluster

## Export

First, you need to have the 'datamodel.prisma' or the folder containing the schema of the database.

Create a file 'prisma.yml' with the content under and replace the xxxxxx by the right information:
If the data are inside the cluster of prisma1 eu : [https://eu1.prisma.sh/xxxxxxxxxxxx]

```
endpoint: xxxxxxxxxxxxxxxxxxxxx/manypixels-server/prod?headers={"Authorization":"Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
secret: xxxxxx

datamodel:
  - ./datamodel/all.prisma
  - ./datamodel/calendar.prisma
```
