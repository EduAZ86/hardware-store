import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IInputFieldProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
 
    | "id"
    | "placeholder"
    | "type"
    | "disabled"
    | "required"
    | "value"
    | "onChange"
    | "onBlur"
    | "onFocus"
    | "onInvalid"
    | "onKeyDown"
    | "onKeyUp"
    | "onSubmit"
    | "max"
    | "min"
    | "step"
    | "accept"
    | "multiple"
    | "autoComplete"
    | "autoFocus"
    | "list"
    | "maxLength"
    | "minLength"
    | "size"
> {
    name:string;
    register: UseFormRegister;
    label?: string;
    disabled: boolean;
    requiredMessage?: string;
    errors: FieldErrors<FieldValues>
    watch?: UseFormWatch<FieldValues>
}

export interface IInputTextAreaProps extends Pick<TextareaHTMLAttributes<HTMLTextAreaElement>,
 
    | "id"
    | "placeholder"
    | "type"
    | "value"
    | "onChange"
    | "onBlur"
    | "onFocus"
    | "maxLength"
    | "minLength"
    | "rows"
    | "cols"
    | "wrap"
> {
    name:string
    register: UseFormRegister;
    label: string;
    disabled: boolean;
    requiredMessage?: string;
    errors: FieldErrors<FieldValues>
}