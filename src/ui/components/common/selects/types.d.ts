import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


export type TOption = {
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
    register?: UseFormRegister;
    requiredMessage?: string;
    errors?: FieldErrors<FieldValues>
}

export interface IBasicOption extends Pick<OptionHTMLAttributes<HTMLOptionElement>,
    | "value"
    | "disabled"
> {
    label: string;
}