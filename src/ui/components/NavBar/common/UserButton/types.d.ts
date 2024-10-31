import { IUserResponse } from "@/types/user.types";
import { ButtonHTMLAttributes } from "react";

export interface IUserButtonProps {
    user?: IUserResponse;
    isAuthenticated: boolean;
}