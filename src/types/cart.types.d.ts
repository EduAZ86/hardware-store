import { Date, Schema } from "mongoose";
import { IProduct, TPrice } from "./product.types";

type TCartStatus = 'active' | 'completed' | 'cancelled';


export interface ICart {
    userID: string;
    items: ICartItem[];
}

export interface ICartItem {
    productID: string;
    quantity: number;
}
export interface ICartItemResponse extends ICartItem {
    price: TPrice;
    name: string;
    image: string;
}

export interface ICartResponse {
    userID: string;
    items: ICartItemResponse[];
    updatedAt: string;
}