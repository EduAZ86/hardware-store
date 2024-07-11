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
            w-1/3 h-5/6
             relative z-0                   
            flex flex-col
            p-6 rounded-md overflow-hidden gap-5
        `}
        >
            {children}
        </form>
    )
}