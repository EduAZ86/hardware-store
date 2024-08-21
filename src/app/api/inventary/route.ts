import connectDB from "@/lib/db/db";
import { errorLogSave } from "@/services/error/errorLogService";
import { getAllInventary } from "@/services/product/product.services";

import { NextRequest, NextResponse } from "next/server";
export const GET = async (req: NextRequest) => {
    try {
        await connectDB();
  
        const response = await getAllInventary();
        return NextResponse.json({ data: response, status: 200 })
    } catch (error: any) {
        await errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}
