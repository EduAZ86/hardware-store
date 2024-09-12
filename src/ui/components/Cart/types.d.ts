import { ICartResponse } from "@/types/cart.types";

export interface ICartProps {
    cartData?: ICartResponse;
    totalPrice?: number;
}
