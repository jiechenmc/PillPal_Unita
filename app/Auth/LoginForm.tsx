import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    GetUserCommand
} from "@aws-sdk/client-cognito-identity-provider";

const login = (email: string, password: string) => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const command = new InitiateAuthCommand({
        ClientId: process.env.COGNITO_APP_CLIENTID,
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    });

    return client.send(command);
}

const getCurrentUser = (token: string) => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const command = new GetUserCommand({ AccessToken: token });

    return client.send(command);
}



const handleLogin = () => {
    login("email@example.com", "password").then(r => {
        if (r.AuthenticationResult?.AccessToken) {
            getCurrentUser(r.AuthenticationResult.AccessToken).then(r => console.log(r))
        }
    })
}

const LoginForm = () => {
    return <div>Login Form</div>;
}

export default LoginForm;