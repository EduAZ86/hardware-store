import connectDB from "@/lib/db/db"
import { errorLogSave } from "@/services/error/errorLogService";
import { deleteOrderByOrderID, getOrderByOrderID, updateOrderByOrderID } from "@/services/order/order.services";
import { IOrder } from "@/types/order.types";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    try {
        await connectDB()
        const orderID = req.nextUrl.searchParams.get('orderID');
        if (!orderID) {
            throw new Error('orderID is required');
        }
        const response = await getOrderByOrderID(orderID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const PATCH = async (req: NextRequest) => {
    try {
        await connectDB()
        const orderID = req.nextUrl.searchParams.get('orderID');
        const orderData = await req.json() as Partial<IOrder>;
        if (!orderID) {
            throw new Error('orderID is required');
        }
        if (!orderData) {
            throw new Error('Order data is required');
        }
        const response = await updateOrderByOrderID(orderID, orderData);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const DELETE = async (req: NextRequest) => {
    try {
        await connectDB()
        const orderID = req.nextUrl.searchParams.get('orderID');
        if (!orderID) {
            throw new Error('orderID is required');
        }
        const response = await deleteOrderByOrderID(orderID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}