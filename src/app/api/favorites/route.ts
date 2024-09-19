import connectDB from "@/lib/db/db";
import { errorLogSave } from "@/services/error/errorLogService";
import { deleteItemFavorites, getFavoritesByUserID, postNewItemFavorites, updateFavorites } from "@/services/favorites/favorites.services";
import { IFavoriteItem } from "@/types/favorites";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('userID');
        if (!userID) {
            throw new Error('userID is required');
        }
        const favorites = await getFavoritesByUserID(userID);
        return NextResponse.json({ data: favorites, status: 200 })
    } catch (error: any) {
        await errorLogSave(error);
        return NextResponse.json({ error: error.message })
    }
}

export const POST = async (req: NextRequest) => {
    try {
        await connectDB();
        const data = await req.json();
        console.log(data);
        
        const { userID, productID } = data.params;
        if (!userID) {
            throw new Error('userID is required');
        }
        if (!productID) {
            throw new Error('productID is required');
        }
        const response = await postNewItemFavorites(userID, productID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error);
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
        const response = await deleteItemFavorites(userID, productID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error);
        return NextResponse.json({ error: error.message })
    }
}

export const PATCH = async (req: NextRequest) => {
    try {
        await connectDB();
        const userID = req.nextUrl.searchParams.get('userID');
        const itemsFavorites = await req.json() as IFavoriteItem[];
        if (!userID) {
            throw new Error('userID is required');
        }
        if (!itemsFavorites) {
            throw new Error('itemsFavorites is required');
        }
        const response = await updateFavorites(userID, itemsFavorites);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error);
        return NextResponse.json({ error: error.message })
    }
}