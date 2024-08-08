import connectDB from "@/lib/db/db"
import { errorLogSave } from "@/services/error/errorLogService";
import { getOrdersByUserID, postNewOrder } from "@/services/order/order.services";
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
    try {
        await connectDB()
        const userID = req.nextUrl.searchParams.get('userID');
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await getOrdersByUserID(userID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const orderData = await req.json();
        if (!orderData) {
            throw new Error('Order data is required');
        }
        const response = await postNewOrder(orderData);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}