import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito";

const handler = NextAuth({
    providers: [
        CognitoProvider({
            idToken: true,
            clientId: process.env.COGNITO_CLIENT_ID!,
            clientSecret: process.env.COGNITO_CLIENT_SECRET!,
            issuer: process.env.COGNITO_ISSUER,
        })
    ],

    callbacks: {
        async jwt({ token, user, account }) {
            console.log(account)
            return { ...token, ...user, ...account };
        },
        async session({ session, token }) {
            session.user!.id = token.id_token;
            return session;
        }
    }
})

export { handler as GET, handler as POST }