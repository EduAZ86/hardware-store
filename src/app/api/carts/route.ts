import connectDB from "@/lib/db/db"
import { getCartByUserID, postNewCart } from "@/services/cart/cart.services";
import { errorLogSave } from "@/services/error/errorLogService"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();

        const token = await getToken({ req });
        console.log("token", token);


        const userID = req.nextUrl.searchParams.get('userID');
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await getCartByUserID(userID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
};

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const cartData = await req.json();
        if (!cartData) {
            throw new Error('Cart data is required');
        }
        const response = await postNewCart(cartData);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}