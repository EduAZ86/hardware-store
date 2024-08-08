import "next-auth"
import { IUserSession } from "./user.types";

declare module "next-auth" {
    interface Session {
        user: IUserSession;
    }
}