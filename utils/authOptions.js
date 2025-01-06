import  GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

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
            await connectDB();
            //check if user exists
            const userExists = await User.findOne();
            // if not, create user
            //allow signin

    

        },
        //session callback functions theat modifies the session object
        async session ({ session }){
            //get user from datbase
            //assign user id from session
            //return session
        }

    }
}