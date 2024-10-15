import { ICartItemResponse } from "@/types/cart.types";
import { IOrderResponse } from "@/types/order.types";

export interface IOrdersSummaryViewerProps {
    userID: string;
}

export interface IOrderCardProps {
    order: Partial<IOrderResponse>;
}

export interface ILabelAndValueProps {
    label: string;
    value?: string;
    large?: boolean;
}

export interface IItemsTableProps {
    items: ICartItemResponse[];
    totalPrice: number;
}

export interface IItemsRowProps {
    item: ICartItemResponse
}