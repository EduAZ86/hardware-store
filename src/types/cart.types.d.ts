import { Schema } from "mongoose";
import { IProduct } from "./product.types";

type TCartStatus = 'active' | 'completed' | 'cancelled';

export interface ICartItem {
    productID: string;
    quantity: number;
    subTotalPrice: number;
}

export interface ICart {
    userID: string;
    items: ICartItem[];
    totalPrice: number;
    totalQuantity: number;
    status: TCartStatus;
}

export interface ICartResponse extends ICart {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}