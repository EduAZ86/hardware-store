import { FC } from "react";
import { Loader } from "../../common";
import { IOrdersSummaryViewerProps } from "./types";
import { useOrderData } from "@/hooks/orders/useDataOrder";
import { OrderCard } from "./OrderCard";

export const OrdersSummaryViewer: FC<IOrdersSummaryViewerProps> = ({
    userID
}) => {
    const { data: orders, isLoading, error } = useOrderData().useGetAllOrders(userID)
    return (
        <div
            className={`
                    w-full max-h-[70vh]
                    flex flex-col
                    gap-2 p-2
                    overflow-y-scroll
                `}
        >{
                isLoading
                    ?
                    <Loader />
                    :
                    <>
                        {orders?.map((order) => (
                            <OrderCard
                                key={order._id}
                                order={order}
                            />

                        ))}
                    </>
            }

        </div>
    )
}