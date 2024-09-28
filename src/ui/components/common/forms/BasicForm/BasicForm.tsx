import { FC } from "react";
import { IBasicFormProps } from "./types";


export const BasicForm: FC<IBasicFormProps> = ({
    children,
    onSubmit,
    transparent,
    ...otherFormProps
}) => {
    return (
        <form
            onSubmit={onSubmit}
            {...otherFormProps}
            className={`
            w-full h-full
             relative z-0                   
            flex flex-col
            justify-center items-center
            p-6 rounded-md overflow-hidden gap-5
            ${transparent ? "bg-transparent" : "bg-light-acent dark:bg-dark-acent"}            
        `}
        >
            {children}
        </form>
    )
}