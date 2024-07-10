import { InputHTMLAttributes } from "react";

export interface IInputAuthProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
    | "onChange"
    | "value"
    | "name"
    | "id"
    | "placeholder"
    | "title"
    | "type"
> {
    label: string;
    disabled: boolean;
}