import { ICartItem } from "@/types/cart.types";

export interface ICartCardProps {
    userID: string;
    item: ICartItemResponse;
    quantity: number;
    increaseItem: (productID: string, stock: number) => void;
    decreaseItem: (productID: string) => void;
    removeItem: (productID: string) => void;  
}