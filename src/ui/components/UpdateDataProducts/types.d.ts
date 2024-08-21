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

type TUpdaterVariant = "create" | "update"
export interface IUpdateDataProductsProps {
    variant: TUpdaterVariant;
    title: string;
    ProductID?: string;
}