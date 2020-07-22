# How to integrate mailchimp v3.0 through request-promise

Simple piece of code for remembering how to do for the futur development
```
var rpForJson = rp.defaults({ json: true });

 await (rpForJson("https://"+process.env.TOKEN_SECRET_MAILCHIMP_DC+".api.mailchimp.com/3.0/",{
          'auth': {
                'user': 'anystring',
                'pass': process.env.TOKEN_SECRET_MAILCHIMP
              },
          'headers': {
              'Accept': 'application/json'
            }
    })
```

# How to integrate typeform through request-promise

```
    await (rpForJson("https://api.typeform.com/forms/wPFOMN/responses",{
          'auth': {
                'bearer': process.env.TOKEN_SECRET_TYPEFORM
              },
          'headers': {
                'Accept': 'application/json'
              }
    })
```
