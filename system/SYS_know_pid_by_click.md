# Know a PID by click

```
$ ps -f --pid $(xprop _NET_WM_PID | grep -o '[0-9]*')
```
