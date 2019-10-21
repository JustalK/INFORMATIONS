# How to catch errors on restify without putting try/catch on every call ?

## Solution

```
Create a simple function for handling the catching :

function catchErrors(callback) {
  return async function errorHandler(req, res, next) {
    try {
      await callback(req, res, next)
    } catch (err) {
    	next(err)
    }
  }
}


And apply this one to every call :

.set('/login', 'post', catchErrors(function (req, res, next) {
	//code that can throw error
})


```