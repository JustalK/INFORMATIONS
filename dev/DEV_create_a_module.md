# How to create a module for npmjs


## NPMJS

1. Login to your npmjs account with

```
npm login
```

2. Initialize the project with the right scope

```
npm init --scope=@justalk

```

3. Publish the package without forgetting the access to public

```
npm publish --access public
```

## TRAVIS

1. Signing to travis

```
https://travis-ci.com/
```

2. Activate the application on github

3. Add a weekly cron job

```
In a repository => Setting => cron job 
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
```











