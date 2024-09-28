import { IOrder } from "@/types/order.types";

export interface ICheckoutStore {
    checkoutData: IOrder;
    setCheckoutData: (data: Partial<IOrder>) => void;
    clearCheckoutData: () => void
}   