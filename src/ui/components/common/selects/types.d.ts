import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";


type TOption = {
    value: string,
    label: string;
    id: string;
    disabled: boolean;
}


export interface IBasicSelectProps extends Pick<SelectHTMLAttributes<HTMLSelectElement>,
    | "title"
    | "name"
    | "onChange"
    | "value"
> {
    options: TOption[];
    placeholder: string;
}

export interface IBasicOption extends Pick<OptionHTMLAttributes<HTMLOptionElement>,
    | "value"
    | "disabled"
> {
    label: string;
}