import { Date } from "mongoose";
import { ICartItem, ICartItemResponse } from "./cart.types";

type paymentMethod = 'pending' | 'transfer' | 'paypal' | 'stripe' | 'mercadopago' | 'rapipago' | 'pagofacil';

type TOrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
type TPayment = {
    paymentMethod: paymentMethod;
    paymentStatus: boolean;
}

type shippingAddress = {
    address: string;
    city: string;
    country: string;
    postalCode: string;
}

export interface IOrder {
    userID: string;
    userName: string;
    phoneNumber: string;
    email: string;
    items: ICartItem[];
    totalAmount: number;
    shippingData: shippingAddress;
    orderNotes: string;
    status: TOrderStatus;
    payment?: TPayment;
}

export interface IOrderResponse extends Omit<IOrder, 'items'> {
    items: ICartItemResponse[];
    _id: string;
    createdAt: string;
    updatedAt: string;
}