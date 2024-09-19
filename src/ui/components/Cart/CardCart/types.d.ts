import { ICartItem } from "@/types/cart.types";

export interface ICartCardProps {
    userID: string;
    item: ICartItemResponse;
    quantity: number;
    increaseItem: (currentItem: ICartItem) => void;
    decreaseItem: (currentItem: ICartItem) => void;
    removeItem: (productID: string) => void;
}