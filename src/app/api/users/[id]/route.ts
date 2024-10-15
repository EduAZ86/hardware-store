import connectDB from "@/lib/db/db";
import { errorLogSave } from "@/services/error/errorLogService";
import { deleteUser, getUser, updateUser } from "@/services/users/users.services";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectDB()
        const userID = req.nextUrl.searchParams.get('id');
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await getUser(userID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const PATCH = async (req: NextRequest) => {
    try {
        await connectDB()
        const userID = req.nextUrl.searchParams.get('id');
        const data = await req.json();
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await updateUser(data, userID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}

export const DELETE = async (req: NextRequest) => {
    try {
        await connectDB()
        const userID = req.nextUrl.searchParams.get('id');
        if (!userID) {
            throw new Error('userID is required');
        }
        const response = await deleteUser(userID);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}