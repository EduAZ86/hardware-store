import { IUserResponse } from "@/types/user.types";

export interface IUserSessionProps {
    user?: IUserResponse;
}

export interface INavButtonProps {
    href: string;
    text: string;
    leftBorder?: boolean;
}