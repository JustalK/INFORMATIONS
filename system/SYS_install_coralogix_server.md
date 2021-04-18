# How to install coralogix on a server ?

## Create an account on coralogix

Go on the official website and create an account.
You can use a fake number.

## Install the dependencies

Install the package for coralogix :

```
npm install coralogix-logger-winston winston
```

## Create an API KEY

Go on Setting (on the login), and API Access.

## Add the following code

In the env, use the key provided by email after you activate your account :
```
CORALOGIX_KEY=xxxx-xxxx-xxxx-xxxx
```

In the logger
```
const winston = require('winston');
const CoralogixWinston = require('coralogix-logger-winston');
const { combine, timestamp, prettyPrint } = winston.format;

const config = {
  privateKey: process.env.CORALOGIX_KEY,
  applicationName: 'Transcom',
  subsystemName: process.env.NODE_ENV,
};

CoralogixWinston.CoralogixTransport.configure(config);

/**
 * Config the logger for winston
 **/
const logger_console = winston.createLogger({
    transports: [new winston.transports.Console()]
});

/**
 * Config the logger for winston
 **/
const logger = winston.createLogger({
    format: combine(timestamp(), prettyPrint()),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        }),
        new winston.transports.File({
            filename: 'logs/combined.log'
        }),
				new CoralogixWinston.CoralogixTransport({
	        category: 'info',
	        handleExceptions: true,
	      })
    ]
});
```
