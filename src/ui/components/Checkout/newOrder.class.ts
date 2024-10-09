
import { IOrder, } from "@/types/order.types";
import { FieldValues } from "react-hook-form";
export class NewOrderClass implements IOrder {

    userID: string;
    userName: string;
    phoneNumber: string;
    email: string;
    items: IOrder['items'];
    totalAmount: number;
    shippingData: IOrder['shippingData'];
    orderNotes?: string;
    status: IOrder['status'];
    payment?: IOrder['payment'];
    constructor(userID: string, items: IOrder['items'], totalAmount: number, data: FieldValues) {
        this.userID = userID;
        this.userName = data?.userName as string;
        this.phoneNumber = data?.phoneNumber as string;
        this.email = data?.email as string;
        this.items = items;
        this.totalAmount = totalAmount;
        this.orderNotes = data?.orderNotes as string;
        this.shippingData = {
            address: data.address,
            city: data.city,
            country: data.country,
            postalCode: data.postalCode
        };
        this.status = "pending";
        this.payment = {
            paymentMethod: "mercadopago",
            paymentStatus: false
        };
    }
}