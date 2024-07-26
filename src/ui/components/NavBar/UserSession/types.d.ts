import { IUserToken } from "@/app/api/auth/[...nextauth]/userToken.interface";

export interface IUserSessionProps {
    user: IUserToken;
}