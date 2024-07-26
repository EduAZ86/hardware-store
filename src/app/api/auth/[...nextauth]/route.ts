import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkUser, loginUser, registerUser } from "@/services/auth/authServices";
import connectDB from "@/lib/db/db";
import { ErrorLog } from "@/services/error/errorLog.class";
import { errorLogSave } from "@/services/error/errorLogService";
import { IUserToken } from "./userToken.interface";
import { INewUser } from "@/types/user.types";
import { randomPassword } from "@/utils/randomPassword";
import { User } from "next-auth";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    await connectDB()
                    if (!credentials) {
                        throw new ErrorLog("Credentials are required", 'error', 'authorize', undefined, '/login');
                    }
                    const user = await loginUser(credentials)
                    if (!user) {
                        throw new ErrorLog("User not found", 'error', 'authorize', undefined, '/login');
                    }
                    console.log("user retornado del login", user);
                    
                    return {
                        id: user._id.toString(),
                        name: user.username,
                        email: user.email,
                        image: user.picture
                        
                    } as User;
                } catch (error: any) {
                    await errorLogSave(error)
                    return null;
                }
            }
        })
        ,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            try {
                await connectDB();
                if (user && user.email && user.name && user.image) {
                    const existingUser = await checkUser(user.email);
                    if (!existingUser && account && account.provider === "google") {
                        const newUser: INewUser = {
                            username: user.name,
                            email: user.email,
                            password: randomPassword(10),
                            role: "user",
                            picture: user.image
                        };       
                        await registerUser(newUser);
                    }
                }
            } catch (error: any) {
                await errorLogSave(error);
            }
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as IUserToken;
            return session
        }
    }
    , pages: {
        signIn: "/auth/login"
    },
    secret: process.env.NEXTAUTH_SECRET,

    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === 'development'
})

export { handler as GET, handler as POST }