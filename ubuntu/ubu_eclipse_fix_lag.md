# How to fix the lag on eclipse IDE ?

First solution is to increase the memory allowed to eclispe. In the eclipse.ini, increase the value of "-Xms" and "-Xmx"
```
-Xms2048m
-Xmx4092m
```

Secondly, for cutting down the Eclipse startup time considerably (50% in my case if not more). Let's remove the validation of all the .class files at startup. In the eclipse.ini, adding the option : 
```
-Xverify:none 
```