ServiceConfiguration.configurations.upsert(
    { service: "google" },
    {
        $set: {
            clientId: "170762067850-9nkab4bqrpnrnr1g2gcptsfe830lv8sg.apps.googleusercontent.com",
            loginStyle: "popup",
            secret: "nOF0_YYurbsGqa7CQ8hKFema"
        }
    }
);

ServiceConfiguration.configurations.upsert(
{ service: "facebook" },
{
    $set: {
            appId: '812677155488375',
            loginStyle: "popup",
            secret: 'd0d6a49f217cf5db3b9b4e950918e6c8'
    }
});

ServiceConfiguration.configurations.upsert(
    { service: "stripe" },
    {
        $set: {
            appId: 'ca_6Gzyi8WT2ICdahJ5CuRkR6FXFmtdNn5k',
            loginStyle: "popup",
            secret: 'sk_test_NAg08WVB5n7uXoXCfC0kLhA9'
        }
    });
