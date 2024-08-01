import connectDB from "@/lib/db/db";
import { deleteCart, getCartByCartID, updateCart } from "@/services/cart/cart.services";
import { errorLogSave } from "@/services/error/errorLogService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const cartID = req.nextUrl.searchParams.get('CartID');
        if (!cartID) {
            throw new Error('cartID is required');
        }
        const response = await getCartByCartID(cartID);
        return NextResponse.json({ data: response, status: 200 })

    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
};

export const DELETE = async (req: NextRequest) => {
    try {
        await connectDB();
        const cartID = req.nextUrl.searchParams.get('CartID');
        if (!cartID) {
            throw new Error('cartID is required');
        }
        const response = await deleteCart(cartID);
        return NextResponse.json({ data: response, status: 200 })

    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const PUT = async (req: NextRequest) => {
    try {
        await connectDB();
        const cartID = req.nextUrl.searchParams.get('CartID');
        const cartData = await req.json();
        if (!cartID) {
            throw new Error('cartID is required');
        }
        if (!cartData) {
            throw new Error('Cart data is required');
        }
        const response = await updateCart(cartID, cartData);
        return NextResponse.json({ data: response, status: 200 })

    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}
