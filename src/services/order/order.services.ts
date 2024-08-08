import OrderModel from "@/models/order";
import { IOrder } from "@/types/order.types"
import mongoose from "mongoose";
import { OrderPartialSchema, OrderSchema } from "./validation.schema";

export const getOrdersByUserID = async (userID: string) => {
    const userObjectID = new mongoose.Types.ObjectId(userID);
    const data = await OrderModel.find({ userID: userObjectID }).lean();
    return data
}

export const postNewOrder = async (orderData: IOrder) => {
    const parsedOrder = OrderSchema.parse(orderData);
    const userObjectID = new mongoose.Types.ObjectId(parsedOrder.userID);
    const cartObjectID = new mongoose.Types.ObjectId(parsedOrder.cartID);

    const newOrder = new OrderModel({
        userID: userObjectID,
        cartID: cartObjectID,
        totalAmount: parsedOrder.totalAmount,
        status: parsedOrder.status,
        payment: parsedOrder.payment,
        shippingAddress: parsedOrder.shippingAddress
    })
    const savedData = await newOrder.save();
    return savedData
}

export const getOrderByOrderID = async (orderID: string) => {
    const data = await OrderModel.findById(orderID).lean();
    return data
}

export const deleteOrderByOrderID = async (orderID: string) => {
    const foundOrder = await getOrderByOrderID(orderID);
    if (!foundOrder) throw new Error('Order not found');
    const deletedData = await OrderModel.findByIdAndDelete(orderID);
    return deletedData
}

export const updateOrderByOrderID = async (orderID: string, orderData: Partial<IOrder>) => {
    const parsedOrder = OrderPartialSchema.parse(orderData);
    const foundOrder = await getOrderByOrderID(orderID);
    if (!foundOrder) throw new Error('Order not found');
    const updatedData = await OrderModel.findByIdAndUpdate(orderID, {
        ...parsedOrder
    }, { new: true })
    return updatedData
}