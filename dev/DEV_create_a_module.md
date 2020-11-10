
# How to create a module for npmjs
## Setting up the project fast

1. Create a directory for the `src` and create a file `index.js` with just one line of code :

```
module.exports = {};
```

2. Create a directory for the `tests` and create a file `tests_index.js` with just that :

```
const test = require('ava');
const m = require('../src');

test('[DYNAMIC] Testing the search on the different website', t => {
	t.true(true);
});
```

## NPMJS

1. Login to your npmjs account with

```
npm login
```

2. Initialize the project with the right scope

```
npm init --scope=@justalk

```

3. In the `package.json` created, add the following script and package :

```
"scripts": {
  "test": "xo && nyc --reporter=html --reporter=text ava --verbose --timeout=1m",
  "test-no": "ava tests/*.js --verbose --timeout=1m",
  "coverage": "nyc report --reporter=text-lcov | coveralls"
},
"devDependencies": {
  "ava": "^3.12.1",
  "coveralls": "^3.1.0",
  "nock": "^13.0.4",
  "nyc": "^15.1.0",
  "xo": "^0.33.1"
}
```

4. Install everything with `npm install`



## NPMJS Publishing

3. Publish the package without forgetting the access to public

```
npm publish --access public
```

4. When updating, create a new version

```
npm version major
npm version minor
npm version patch
```

Each command modify the version according to the description under :

```
major => x.0.0
minor => 0.x.0
patch => 0.0.x
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

3. Visit coveralls website and active the repository

4. Add the file .coveralls.yml with the right data propose on the website

```
service_name: travis-pro
repo_token:
```

5. Add the script coverage at the end of the `.travis.yml`

```
after_success: npm run coverage
```

## SHIELDS

1. Search the following shields on this website : https://shields.io/

```
node-current
travis
david
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
```
