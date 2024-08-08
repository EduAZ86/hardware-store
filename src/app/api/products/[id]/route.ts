import connectDB from "@/lib/db/db";
import { errorLogSave } from "@/services/error/errorLogService";
import { deleteProduct, getProductsByProductID, updateProduct } from "@/services/product/product.services";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const productID = req.nextUrl.searchParams.get('productID');
        if (!productID) {
            throw new Error('productID is required');
        }
        const response = await getProductsByProductID(productID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const DELETE = async (req: NextRequest) => {
    try {
        await connectDB();
        const productID = req.nextUrl.searchParams.get('productID');
        if (!productID) {
            throw new Error('productID is required');
        }
        const response = await deleteProduct(productID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const PUT = async (req: NextRequest) => {
    try {
        await connectDB();
        const productID = req.nextUrl.searchParams.get('productID');
        const productData = await req.json();
        if (!productID) {
            throw new Error('productID is required');
        }
        if (!productData) {
            throw new Error('Product data is required');
        }
        const response = await updateProduct(productID, productData);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}