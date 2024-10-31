import { FC } from "react";
import { IAuthFormProps } from "./types";

export const AuthForm: FC<IAuthFormProps> = ({
    children,
    ...otherFormProps
}) => {
    return (
        <form
            {...otherFormProps}
            className={`
            h-fit
            w-full
             relative z-0                   
            flex flex-col
             gap-5
        `}
        >
            {children}
        </form>
    )
}