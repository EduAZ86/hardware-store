import { ICartItemResponse } from "@/types/cart.types";

export interface IMercadopagoCheckoutProProps {
    items: ICartItemResponse[];
    userID: string;
}