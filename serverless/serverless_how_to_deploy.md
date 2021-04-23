# How to deploy a serverless to aws

## Setup

1. Install serverless on your machine : https://www.serverless.com/framework/docs/getting-started/

```
curl -o- -L https://slss.io/install | bash
```

2. Configure the aws crendential

You can add a key by going to your account page on aws. Search for the page for changing your password : Your security Credential
And finally add Access Keys.

then add the key to the serverless :

```
serverless config credentials --provider aws --key key --secret secret
```

3. Deploy

```
serverless deploy --stage stage
```
