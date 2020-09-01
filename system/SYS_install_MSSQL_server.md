# Install a MSSQL server from scrach on Ubuntu 18.04

## Install SQL Server

Import and add the repository

```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
sudo add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/18.04/mssql-server-2019.list)"
```

Then install the server

```
sudo apt-get update
sudo apt-get install -y mssql-server
```

Run the server, you might have to answer to some prompt questions

```
sudo /opt/mssql/bin/mssql-conf setup
```

Check if the server run perfectly

```
systemctl status mssql-server --no-pager
```

## Install the SQL Server command-line tools

Import and add the repository


```
curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -
curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list
```

Then install the server

```
sudo apt-get update
sudo apt-get install mssql-tools unixodbc-dev
```

If the package msodbcsql17 (>= 17.3.0.0) is missing :

```
sudo apt-get install libodbc1
sudo apt-get install unixodbc
sudo ACCEPT_EULA=Y apt-get install msodbcsql17
sudo ACCEPT_EULA=Y apt-get install mssql-tools
```

```
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bash_profile
echo 'export PATH="$PATH:/opt/mssql-tools/bin"' >> ~/.bashrc
source ~/.bashrc
```

## Connect locally

```
sqlcmd -S localhost -U SA -P 'PASSWORD'
```

## Restore a database

```
sqlcmd -S localhost -U SA -Q "RESTORE DATABASE [demodb] FROM DISK = N'/home/xxxxxxx/TEST/v.bak' WITH FILE = 1, NOUNLOAD, REPLACE, NORECOVERY, STATS = 5"
```

## Some useful commands

1. Show all the tables inside the database

```
SELECT * FROM information_schema.TABLES
GO
```

2. Restore db from bak FILE

```
RESTORE DATABASE vehicledb FROM DISK = '/home/xxxxxxx/Documents/vehicledb.bak' WITH MOVE 'vehicledb' TO '/var/opt/mssql/data/vehicledb.mdf', MOVE 'vehicledb_log' TO '/var/opt/mssql/data/vehicledb_log.ldf'
GO
```

3. Show the informations of the bak FILE

```
RESTORE FILELISTONLY FROM DISK = '/var/opt/mssql/backup/YourDB.bak'
GO

sqlcmd -S localhost -U SA -Q "RESTORE FILELISTONLY FROM DISK = N'/home/xxxxxxx/Documents/v.bak'"
GO
```
