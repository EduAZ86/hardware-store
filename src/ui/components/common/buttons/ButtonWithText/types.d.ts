import { ButtonHTMLAttributes } from "react";

type buttonSize = "full" | "middle" | "small";
type buttonVariant = "transparent" | "backgroundColor";

export interface IButtonWithTextProps extends Pick<ButtonHTMLAttributes<HTMLButtonElement>,
    | "onClick"
    | "disabled"
    | "title"
    | "onFocus"
    | "onBlur"
    | "type"
> {
    textButton: string;
    buttonSize: buttonSize;
    buttonVariant: buttonVariant;
    loading?: boolean;

}