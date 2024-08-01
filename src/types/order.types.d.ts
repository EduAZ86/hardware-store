import { Date } from "mongoose";

type TOrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
type TPayment = {
    paymentMethod: string;
    paymentStatus: boolean;
}

export interface IOrder {
    userID: string;
    cartID: string;
    totalAmount: number;
    status: TOrderStatus;
    payment: TPayment;
    shippingAddress: string;
}

export interface IOrderResponse extends IOrder {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}