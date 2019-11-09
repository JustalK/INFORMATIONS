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

## Flat a multidirectionnal array to one array : flat()

Just a simple function : flat()

```
let arr = [0,1,[2,3]]
arr.flat()
//output : [0,1,2,3]
```

## Create an object with a key variable

```
let key="lol"
let obj = {[key]:"qwerty"}
```

## Getting uniqueness of an array of object

We just check that the index of the first element with "findIndex" is equal to the index of the current element.
If the element is unique or if it's the first we pass through it, that would be equal.

```
const filters = documents.filter((x,i) => {
	return documents.findIndex(y=>y.label==x.label && y.value==x.value).index == i
});
```
