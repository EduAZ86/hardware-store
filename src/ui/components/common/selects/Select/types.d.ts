import { TSortOptions } from "@/types/userInterface.types";
import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";



export type TOption = {
    value: TSortOptions,
    label: string;
    id: string;
    disabled: boolean;
}


export interface ISelectProps extends Pick<SelectHTMLAttributes<HTMLSelectElement>,
    | "title"
    | "onChange"
    | "value"
> {
    options: TOption[];
    placeholder: string;
    requiredMessage?: string;
    register: UseFormRegister<FieldValues>;  
    errors?: FieldErrors<FieldValues>
    name: string;
}

export interface IOptionProps extends Pick<OptionHTMLAttributes<HTMLOptionElement>,
    | "value"
    | "disabled"
> {
    label: string;
}