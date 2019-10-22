# Stupid, tricky and funny things of javascript

## NaN is treated as unequal to itself  

```
var a = NaN;
a !== a; //true

```

## Array replacer

```
const data = {
	"name":"Tintin",
	"dog":"Milou",
	"ville":"Tibet"
}

const tdata = JSON.stringify(data,["dog","ville"]);
// output: {"dog":"Milou","ville":"Tibet"}
```