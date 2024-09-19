import connectDB from "@/lib/db/db";
import { ICart } from "@/types/cart.types";
import { ItemCart } from "@/types/user.types";
import { NextRequest, NextResponse } from "next/server";
import { errorLogSave } from "@/services/error/errorLogService";
import { deleteItemCart, getCartByUserID, postNewItemCart, updateItemCart, updateUserCart } from "@/services/usercart/usercart.services";


export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('userID');
        if (!userID) {
            throw new Error('userID is required');
        }
        const cart = await getCartByUserID(userID)
        if (!userID) {
            throw new Error('userID is required');
        }
        return NextResponse.json({ data: cart, status: 200 })
    } catch (error: any) {
        await errorLogSave(error);
        return NextResponse.json({ error: error.message })
    }
}
export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('id');
        const itemData = await req.json() as ItemCart;
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await postNewItemCart(userID, itemData.productID)
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const PUT = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('id');
        const updatedCart = await req.json() as ICart;
        if (!userID) {
            throw new Error('userID is required');
        }
        if (!updatedCart) {
            throw new Error('Cart data is required');
        }
        const response = await updateUserCart(userID, updatedCart)
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const PATCH = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('id');
        const itemData = await req.json() as ItemCart;
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await updateItemCart(userID, itemData)
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const DELETE = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('userID');
        const productID = req.nextUrl.searchParams.get('productID');
        if (!userID) {
            throw new Error('userID is required');
        }
        if (!productID) {
            throw new Error('productID is required');
        }
        const response = await deleteItemCart(userID, productID)
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}