import { ICartResponse } from "@/types/cart.types";

export interface ICartProps {
    cartData?: ICartResponse;
    totalPrice?: number;
    isLoading?: boolean;
    refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<ICartResponse, Error>>
}
