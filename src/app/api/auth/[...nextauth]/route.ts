import NextAuth from "next-auth/next";
import connectDB from "@/lib/db/db";
import { randomPassword } from "@/utils/randomPassword";
import GoogleProvider from "next-auth/providers/google";
import { ErrorLog } from "@/services/error/errorLog.class";
import { errorLogSave } from "@/services/error/errorLogService";
import CredentialsProvider from "next-auth/providers/credentials";
import { INewUser, IUserDataBaseResponse } from "@/types/user.types";
import { checkUser, getUser, loginUser, registerUser } from "@/services/auth/authServices";


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

                    const response: IUserDataBaseResponse = {
                        id: user._id.toString(),
                        username: user.username,
                        email: user.email,
                        picture: user.picture,
                        role: user.role,
                        favoriteProducts: user.favoriteProducts,
                        createdAt: user.createdAt,
                        updatedAt: user.updatedAt
                    }
                    return response
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
                    const completeUser = await getUser(user.email);
                    token.user = { ...user, ...completeUser };
                }
            } catch (error: any) {
                await errorLogSave(error);
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as IUserDataBaseResponse;
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