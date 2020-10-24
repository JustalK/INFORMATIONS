# Pylint error

## Unable to load gi

It tooks me a while but after many attempts :

```
sudo apt-get install python3-gi
pip install vext
pip install vext.gi
sudo apt-get install pkg-config libcairo2-dev gcc python3-dev libgirepository1.0-dev
pip install gobject PyGObject
```

I finally discover how to pass this error by installing this package :

```
sudo apt-get install -y python-gobject
```
