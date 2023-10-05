import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import Users from "@/models/user/userSchema";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            async authorize(credentials, req) {
                await mongoose.connect(process.env.MONGO_URL);
                const { email, password } = credentials;
                const user = await Users.findOne({ email: email });
                mongoose.disconnect();
                if (!user) {
                    // mongoose.disconnect();
                    return null;//indicates not found
                }
                const passwordCompare = await bcrypt.compare(password, user.password);
                if (!passwordCompare) {
                    // mongoose.disconnect();
                    return null;
                }
                // mongoose.disconnect();
                return {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    username: user.username
                };//this will be found in session as user
            }
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account, user }) {
            if(account){//signing in
                if(account.provider=="google"){
                    //user={id,name,email,image}
                    await mongoose.connect(process.env.MONGO_URL);
                    const email=user.email;
                    const doc = await Users.findOne({ email: email });
                    if(!doc){
                        const salt=await bcrypt.genSalt(10);
                        const hashedPassword=await bcrypt.hash(process.env.DUMMY_PASSWORD,salt);
                        const newUser=new Users({name:user.name,email:user.email,username:user.name,password:hashedPassword})
                        await newUser.save();
                    }
                    mongoose.disconnect();
                }
            }
            return token;
        }
    }
}


export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };