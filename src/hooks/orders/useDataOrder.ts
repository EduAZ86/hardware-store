import createAxiosInstance from "@/lib/axios/axiosInstance";
import { useSession } from "next-auth/react";
import { deleteOrder, getOrderByOrderID, getOrdersByUserID, postNewOrder } from "./fetchingOrderData";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IOrder } from "@/types/order.types";


export const useOrderData = () => {
    const session = useSession();
    const id = session.data?.user?.userData?._id as string;
    const orderDataAxiosInstance = createAxiosInstance(true, id);


    const useGetAllOrders = (userID: string) => {      
        return useQuery({
            queryKey: ["orders"],
            queryFn: () => getOrdersByUserID(userID, orderDataAxiosInstance),
        })
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