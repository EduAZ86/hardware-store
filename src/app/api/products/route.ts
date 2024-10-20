import connectDB from "@/lib/db/db";
import { errorLogSave } from "@/services/error/errorLogService";
import { getProducts, postNewProduct } from "@/services/product/product.services";

import { TSortOptions } from "@/types/userInterface.types";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const { searchParams } = req.nextUrl;
        const lengthPageValue =searchParams.get('lengthPage');
        const offsetValue = searchParams.get('offset');
        const sortValue = searchParams.get('sort') as TSortOptions;
        const searchTerm = searchParams.get('searchTerm') as string | undefined;

        if (!lengthPageValue || !offsetValue) {
            throw new Error('lengthPage or offset is required');
        }

        const response = await getProducts(Number(lengthPageValue), Number(offsetValue), sortValue, searchTerm);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const productData = await req.json();
        if (!productData) {
            throw new Error('Product data is required');
        }
        const response = await postNewProduct(productData);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}