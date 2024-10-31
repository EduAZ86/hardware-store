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


const authOptions: AuthOptions = {
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
                    const user: IUserResponse = await loginUser(credentials)
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
        }
        )
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (account && profile) {
                return true
            }
            return false
        },
        async jwt({ token, user, account, isNewUser, profile }) {
            try {
                console.log("-----------****** estoy en jwt *****------------");
                console.log("token", token);
                console.log("user", user);
                console.log("account", account);
                console.log("isNewUser", isNewUser);
                console.log("profile", profile);


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
                    if (account) {
                        token.accessToken = account.access_token
                        token.id = profile?.sub
                    }
                    token.user = {
                        ...user,
                        ...token,
                        userData: completeUser
                    };
                }
                console.log("token", token);
                return token;
            } catch (error: any) {
                console.log("error", error);
                await errorLogSave(error);
                return token;
            }
        },
        async session({ session, token, user }) {
            console.log("-----------****** estoy en session *****------------");
            try {
                console.log("token dentro de session", token);
                console.log("session dentro de session", session);
                session.user.token = token.accessToken as string
                session.user.id = token.id as string

                if (token.user) {
                    session.user = {
                        ...token.user,
                        token: token.jti as string,
                        name: token.user.name as string,
                        email: token.user.email as string,
                        image: token.user.image as string
                    }
                };
                console.log("session", session);
                return session
            } catch (error: any) {
                console.log("error in session", error);
                await errorLogSave(error);
                return session;
            }
        }
    }
    , pages: {
        signIn: "/auth/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 días
        updateAge: 24 * 60 * 60, // 24 horas
        generateSessionToken: () => {
            return require('crypto').randomBytes(32).toString('hex');
        },

    },
    //configura cookies para https en produccion y lo deshabilita en local que funciona en http
    cookies: process.env.NODE_ENV === "production" ? {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                secure: true, 
                sameSite: "lax",
                path: "/",
            },
        }
    } : undefined,
    debug: process.env.NODE_ENV === 'development'
    ///////////////////////////////////////////
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }