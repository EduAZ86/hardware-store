import { DataProductCard } from "@/types/data.types";
import { IProductResponse } from "@/types/product.types";

export interface ICardProductProps {
    dataProduct: IProductResponse;
}

export interface IDiscountProps {
    discount: number;
}