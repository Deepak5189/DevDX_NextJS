import User from "@/models/User";
import Connect from "@/utils/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import Error from "next/error";
import bcrypt from "bcryptjs"

const handler= NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await Connect();

        try{
          const user=await User.findOne({email: credentials.email});

          if(user){
            const isCorrect=await bcrypt.compare(credentials.password, user.password);
            if(isCorrect){
              return user;
            }
            else{
              throw new Error("Wrong Password!");
            }
          }
          else{
            throw new Error("User Not Found!");
          }
        }catch(err){
          throw new Error(err);
        }
      },
    }),
  ],
  pages:{
    error:"/dashboard/login",
  }
});

export {handler as GET, handler as POST};