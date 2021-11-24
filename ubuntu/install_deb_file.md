# Install DEB file

## Using dpkg

Using the dpkg command is the first method we’ll go over for installing DEB packages and is also probably the most common. Run the command like this, while replacing example.deb with the name of your package:

```
$ sudo dpkg -i example.deb
```

If the package requires dependencies that aren’t already on your system, you’ll see this error in the terminal **dpkg: error processing package**. In which case, you only need to write this command first :

```
$ sudo apt install -f
```
