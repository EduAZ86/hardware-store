import { ICartItemResponse } from "@/types/cart.types";
import { IOrder } from "@/types/order.types";

export interface IOrderSummaryProps {
    isLoading: boolean;
    items: ICartItemResponse[];
    totalPrice: number;
}