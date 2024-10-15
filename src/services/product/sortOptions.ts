import { TSortOptions } from "@/types/userInterface.types";
import { SortOrder } from "mongoose";

export const sortOptions: Record<TSortOptions, { [key: string]: SortOrder }> = {
    "price_asc": { 'price.price': 1 },
    "price_desc": { 'price.price': -1 },
    "discount_asc": { 'price.percentageDiscount': 1 },
    "discount_desc": { 'price.percentageDiscount': -1 },
}