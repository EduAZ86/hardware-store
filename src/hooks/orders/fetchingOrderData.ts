import { IOrder, IOrderResponse } from "@/types/order.types";
import { AxiosInstance } from "axios";

export const getOrdersByUserID = async (userID: string, dataOrdersInstance: AxiosInstance) => {
    try {
        const response = await dataOrdersInstance.get("/orders", {
            params: {
                userID: userID
            }
        })
        return response.data.data as IOrderResponse[]
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const getOrderByOrderID = async (orderID: string, dataOrdersInstance: AxiosInstance) => {
    try {
        const response = await dataOrdersInstance.get(`/orders/${orderID}`,{
            params: {
                orderID: orderID
            }
        }
        )
        return response.data.data as IOrderResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const postNewOrder = async (newOrder: IOrder, dataOrdersInstance: AxiosInstance) => {
    try {
        const response = await dataOrdersInstance.post("/orders", newOrder)
        return response.data.data as IOrderResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const deleteOrder = async (orderID: string, dataOrdersInstance: AxiosInstance) => {
    try {
        const response = await dataOrdersInstance.delete(`/orders/${orderID}`)
        return response.data.data as IOrderResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}