import "next-auth"
import { IUserResponse, IUserSession } from "./user.types";

import { User } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
declare module "next-auth" {
    interface Session {
        user: IUserSession;
    }
};

interface CustomJWTUser extends User {
    userData: IUserResponse
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        user: CustomJWTUser
    }
}

