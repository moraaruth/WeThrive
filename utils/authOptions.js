import  GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                prompt: 'consent',
                access_type: 'offline',
                response_type: 'code'
                }
            }

        })
    ],
    callbacks: {
        //invoked on successful sign in
        async signIn({profile}) {
            // connect to the database
            //check if user exists
            // if not, create user
            //allow signin

    

        },
        //session callback functions theat modifies the session object
        async session ({ session }){}

    }
}