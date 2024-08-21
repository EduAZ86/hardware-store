import { IProductResponse } from "@/types/product.types";


export interface IProductDataTable {
    id: string;
    name: string;
    category: string;
    brand: string;
    sku: string;
    averageRating: number;
    stock: number;
    image: string;
    price: number;
}

export interface IInventaryTableProps {
    data: IProductDataTable[]
}

export interface IActionCellProps {
    id: string;
}