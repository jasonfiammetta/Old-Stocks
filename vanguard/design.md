# WOW haha all of this was useless, just use TDA to check the price of mutual funds
## Authentication
[Get Started](https://developer.vanguard.com/get-started)

Client ID
The Client ID is a public identifier for a client application.

Secret
The Secret is a secure key that is only known to the consuming application.

To request a token, make a POST request against the token endpoint [Endpoint](https://oauth.vanguard.com/auth/oauth/v2/token) with your Client ID and Client Secret as Basic Authentication credentials and the body as {"grant_type":"client_credentials"}. The following are examples of how to request a token:

curl
```curl
curl -u $CLIENT_ID:$CLIENT_SECRET https://oauth.vanguard.com/auth/oauth/v2/token -d 'grant_type=client_credentials'
```

Node
```js
var request = require('request');

request({
    url: 'https://oauth.vanguard.com/auth/oauth/v2/token',
    method: 'POST',
    auth: {
        user: CLIENT_ID,
        pass: CLIENT_SECRET
    },
    form: {
        'grant_type': 'client_credentials'
    }
}, function (err, res) {
    var json = JSON.parse(res.body);
    console.info('$ACCESS_TOKEN:', json.access_token);
});
```

## Call APIs

Call our APIs
After retrieving an OAuth token, you are ready to start calling our APIs. In order to authorize against our API gateway, you must include the OAuth token as a bearer token in the Authorization header of the request.

The following are example calls to a basic health-check API:

curl
```curl
curl -H "Authorization: Bearer $ACCESS_TOKEN" https://agw.vanguard.com/healthcheck-target'
```

Node
```js
var request = require('request');
request({
    url: 'https://agw.vanguard.com/healthcheck-target',
    auth: {
        bearer: $ACCESS_TOKEN
    }
}, function (err, res) {
    console.info('response:', JSON.parse(res.body));
});
```

## Errors

Below is an example of the standard response format:

{
    "code": "401",
    "message": "Your request to retrieve your OAuth token contained an invalid client ID and secret"
}

### 4xx Client error
| Code | HTTP responses | Reason | Message |
|----|----------|-------|--------------|
| 401 | Unauthorized | Invalid credentials | Your request to retrieve your OAuth token contained an invalid client id and secret. |
| | | Missing authorization header | Your HTTP request to retrieve your OAuth token is missing the Authorization header. |
| | | Invalid authorization header | Your HTTP request to the API endpoint contained an invalid Authorization header. |
| 403 | Forbidden | Invalid token | Your OAuth token is either invalid or has expired. |
