import { FieldValue, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IImageLoarerProps {
    register: UseFormRegister
    watch: UseFormWatch<FieldValue>
    errors: FieldErrors<FieldValues>
}

export interface IDimensionProductInputsProps {
    register: UseFormRegister
    errors: FieldErrors<FieldValues>
}