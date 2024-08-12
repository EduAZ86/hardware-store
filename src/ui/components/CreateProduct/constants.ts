
import { ECategory, } from "@/types/product.types.d";
import { TOption } from "../common/selects/Select/types";

export const productCategories: ECategory[] = Object.values(ECategory)

export const categoryOptions: TOption[] = productCategories.map((category) => ({
    value: category,
    label: category,
    id: category,
    disabled: false
}));

export const ImagesInput = [1, 2, 3, 4, 5]