ServiceConfiguration.configurations.remove({ service: 'auth0' });

ServiceConfiguration.configurations.insert({
    service:      'auth0',
    domain:       'test.auth0.com',
    clientId:     'testclientId',
    clientSecret: 'testclientSecret',
    loginStyle: "redirect"
});