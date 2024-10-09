import mongoose from "mongoose";
import OrderModel from "@/models/order";
import { ICartItemResponse } from "@/types/cart.types";
import { IOrder, IOrderResponse } from "@/types/order.types"
import { getProductsByProductID } from "../product/product.services";
import { OrderPartialSchema, OrderSchema } from "./validation.schema";

export const getOrdersByUserID = async (userID: string) => {
    const userObjectID = new mongoose.Types.ObjectId(userID);
    const data = await OrderModel.find({ userID: userObjectID }).lean();
    return data
}

export const postNewOrder = async (orderData: IOrder) => {    
    const parsedOrder = OrderSchema.parse(orderData);
    const userObjectID = new mongoose.Types.ObjectId(parsedOrder.userID);
    
    const newOrder = new OrderModel({
        userID: userObjectID,
        userName: parsedOrder.userName,
        phoneNumber: parsedOrder.phoneNumber,
        email: parsedOrder.email,
        items: parsedOrder.items,
        totalAmount: parsedOrder.totalAmount,
        shippingData: parsedOrder.shippingData,
        orderNotes: parsedOrder.orderNotes,
        status: parsedOrder.status,
        payment: parsedOrder.payment,
    })
    const savedData = await newOrder.save();
    return savedData
}

export const getOrderByOrderID = async (orderID: string) => {
    const orderData = await OrderModel.findById(orderID);
    if (!orderData) {
        throw new Error('Order not found');
    }
    const cartItems: ICartItemResponse[] = await Promise.all(
        orderData.items.map(async (item) => {
            const product = await getProductsByProductID(item.productID)
            const itemResponse: ICartItemResponse = {
                productID: item.productID,
                quantity: item.quantity,
                price: product.price,
                name: product.name,
                image: product.images[0]
            }
            return itemResponse
        })
    )
    const orderResponse: IOrderResponse = {
        _id: orderData._id as string,
        userID: orderData.userID.toString(),
        userName: orderData.userName,
        phoneNumber: orderData.phoneNumber,
        email: orderData.email,
        items: cartItems,
        totalAmount: orderData.totalAmount,
        shippingData: orderData.shippingData,
        orderNotes: orderData.orderNotes,
        status: orderData.status,
        payment: orderData.payment,
        createdAt: orderData.createdAt.toString(),
        updatedAt: orderData.updatedAt.toString(),
    }
    return orderResponse
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