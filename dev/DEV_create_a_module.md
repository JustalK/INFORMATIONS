# How to create a module for npmjs


## NPMJS

1. Login to your npmjs account with

```
c
```

2. Initialize the project with the right scope

```
npm init --scope=@justalk

```

3. Publish the package without forgetting the access to public

```
npm publish --access public
```

4. When updating, create a new version

```
npm version major
```

5. Then publish without indicating the access

```
npm publish
```

## TRAVIS

1. Create a .travis.yml in the root of the module

```
language: node_js
node_js:
  - 14
  - 12
  - 10
  - 9
  - 8
after_success: npm run coverage
```

1. Signing to travis

```
https://travis-ci.com/
```

2. Activate the application on github

3. Add a weekly cron job

```
In a repository => Setting => cron job
```

## LINTER

1. Install the linter `xo`

```
npm install xo --save-dev
```

2. Create the config file .xo-config.js at the root of the project

```
module.exports = {
    "esnext": true,
    "rules" : {
        "camelcase": 0,
        "no-unused-vars": 0,
        "unicorn/filename-case": 0
    }
}
```

## TESTS

1. Install the test executable `ava`

```
npm install ava --save-dev
```

2. Create a stupid tests inside the `tests` repository

```
const test = require('ava');
const m = require('../src');

test('[INDEX] Simple useless test', t => {
	t.assert(1 !== 10);
});
```

## COVERALLS

1. Signing to coveralls

```
https://coveralls.io/
```

2. Install the dependencies (https://github.com/nickmerwin/node-coveralls)

```
npm install nyc coveralls --save-dev
```

3. Add the scripts

```
{
  "script": {
     "test": "nyc --reporter=html --reporter=text ava",
     "coverage": "nyc report --reporter=text-lcov | coveralls"
  }
}
```

4. Add the script coverage at the end of the `.travis.yml`

```
after_success: npm run coverage
```

## SHIELDS

1. Search the following shields on this website : https://shields.io/

```
node-current
travis
david
```
