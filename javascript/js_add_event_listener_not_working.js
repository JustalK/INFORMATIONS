# Document AddEventListener not working

After some tries, it appears document.addEventListener is unreliable.
It is better to attache the event on the window
```
window.addEventListener("load")
```
