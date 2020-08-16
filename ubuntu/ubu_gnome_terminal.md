# Gnome terminal commands

## cd command is not working

Gnome terminal cannot execute build in commands like cd. The working around is to specify a working directory.
```
gnome-terminal --working-directory=~/eclipse-workspace/wordpress/wp-content/themes/latsuj/ -e 'mycommand'
```
