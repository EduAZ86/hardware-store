import { ICartItemResponse } from "@/types/cart.types";

export interface ICheckoutItemCardProps extends Pick<ICartItemResponse, "price" | "name" | "quantity"> {}