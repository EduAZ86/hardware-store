import NextAuth from "next-auth/next";
import connectDB from "@/lib/db/db";
import { randomPassword } from "@/utils/randomPassword";
import GoogleProvider from "next-auth/providers/google";
import { ErrorLog } from "@/services/error/errorLog.class";
import { errorLogSave } from "@/services/error/errorLogService";
import CredentialsProvider from "next-auth/providers/credentials";
import { INewUser, IUserResponse, IUserSession } from "@/types/user.types";
import { checkUser, getUser, loginUser, registerUser } from "@/services/auth/authServices";
import { AuthOptions } from "next-auth";


export const authOptions: AuthOptions = {
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
                    const response: IUserSession = {
                        id: user._id.toString(),
                        name: user.username,
                        email: user.email,
                        image: user.picture,
                        userData: user,
                        token: user._id.toString()

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
                    let completeUser: IUserResponse;
                    const existingUser = await checkUser(user.email);
                    if (!existingUser && account && account.provider === "google") {
                        const newUser: INewUser = {
                            id: user.id,
                            username: user.name,
                            email: user.email,
                            password: randomPassword(10),
                            role: "user",
                            picture: user.image
                        };
                        completeUser = await registerUser(newUser);
                    }
                    completeUser = await getUser(user.email);
                    token.user = {
                        ...user,
                        ...token,
                        userData: completeUser
                    };

                }
            } catch (error: any) {
                console.log("error", error);
                await errorLogSave(error);
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...token.user as Omit<IUserSession, 'token'>,
                token: token.jti as string,
            };
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
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }