import { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";


export interface IInputAuthProps extends Pick<InputHTMLAttributes<HTMLInputElement>,
    | "name"
    | "id"
    | "placeholder"
    | "type"
> {
    register: UseFormRegister;   
    disabled: boolean;
    requiredMessage?: string;
    errors: FieldErrors<FieldValues>
}