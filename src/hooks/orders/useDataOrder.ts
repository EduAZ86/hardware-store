import createAxiosInstance from "@/lib/axios/axiosInstance";
import { useSession } from "next-auth/react";
import { deleteOrder, getOrderByOrderID, getOrdersByUserID, postNewOrder } from "./fetchingOrderData";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IOrder } from "@/types/order.types";
import toast from "react-hot-toast";


export const useOrderData = () => {
    const session = useSession();
    const id = session.data?.user?.userData?._id as string;
    const orderDataAxiosInstance = createAxiosInstance(true, id);


    const useGetAllOrders = (userID: string) => {
        const { data: orders, isSuccess, error, refetch, isLoading } = useQuery({
            queryKey: ["orders"],
            queryFn: () => getOrdersByUserID(userID, orderDataAxiosInstance),
        })
        return {
            orders,
            isSuccess,
            error,
            refetch,
        }
    }
    const useGetOrderByOrderID = (orderID: string) => {
        return useQuery({
            queryKey: ["order"],
            queryFn: () => getOrderByOrderID(orderID, orderDataAxiosInstance),
        })
    }
    const usePostNewOrder = () => {
        return useMutation({
            mutationKey: ["order"],
            mutationFn: (newOrder: IOrder) => postNewOrder(newOrder, orderDataAxiosInstance),
        })
    }
    const useDeleteOrder = (orderID: string) => {
        return useMutation({
            mutationKey: ["order"],
            mutationFn: () => deleteOrder(orderID, orderDataAxiosInstance),
        })
    }
    return {
        useGetAllOrders,
        useGetOrderByOrderID,
        usePostNewOrder,
        useDeleteOrder,
    }
}