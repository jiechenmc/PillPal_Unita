import {
    SignUpCommand,
    ConfirmSignUpCommand,
    CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";

interface SignUpInformation {
    clientId: string
    username: string
    password: string
    email: string
}

const confirm = (email: string, code: string) => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const command = new ConfirmSignUpCommand({
        ClientId: process.env.COGNITO_APP_CLIENTID,
        Username: email,
        ConfirmationCode: code
    });

    return client.send(command);
}

const signUp = ({ username, password, email }: SignUpInformation) => {
    const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });

    const command = new SignUpCommand({
        ClientId: process.env.COGNITO_APP_CLIENTID,
        Username: username,
        Password: password,

        UserAttributes: [{ Name: "email", Value: email }, { Name: "name", Value: "Jie Chen" }],
    });

    return client.send(command);
};

const handleSignUp = () => {
    signUp({ clientId: "", username: "jiechenmc@gmail.com", password: "@Chenjie1234", email: "jiechenmc@gmail.com" })
    console.log("DONE")
}


const SignUpForm = () => {
    return <div></div>;
}

export default SignUpForm;