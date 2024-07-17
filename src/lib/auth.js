import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs"

export const { handlers:{GET, POST}, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub(
      {clientId:process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET}),
    Credentials({
      async authorize(credentials){
        const {username, password} = credentials;
        try { 
          connectToDb();
          const user = await User.findOne({username});
          if(!user){
            throw new Error("Error upon logging in. Try Again");
          }
          const isPasswordCorrect = bcrypt.compare(password, user.password);
          if (!isPasswordCorrect){
            throw new Error("Wrong Credentials!");
          }
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
    }})
    ],
  callbacks: {
    async signIn({user, account, profile}){
      if (account.provider === "github"){
        try {
          connectToDb();
          const user = await User.findOne({email: profile.email});
          if (!user){
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            })
            await newUser.save();
          }
        } catch (error) {
          console.log(error.message);
          return false;
        }
        return true;
      }
        }
    } 
})