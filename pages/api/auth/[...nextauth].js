import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "@/database/dbConnect";
import { compare } from "bcryptjs";
import Users from "@/model/schema";
// import { compare } from "bcryptjs";
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: "Connection Failed...!";
        });
        // check if user is already existing
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error(
            " A User with the given Email does not exist, please Sign Up!"
          );
        } // User does exist, now compare passwords..
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        //incorrect?
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password is not matching");
        }
        return result;
      },
    }),
  ],
  // node <openssl rand -base64 32> / jwt.io allows one to decoded the Web token
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
  },
});
