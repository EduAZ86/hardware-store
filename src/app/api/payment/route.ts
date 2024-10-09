import { ICartItemResponse } from "@/types/cart.types";
import { NextRequest, NextResponse } from "next/server";
import { errorLogSave } from "@/services/error/errorLogService";
import { sendPreferencesToMP } from "@/utils/mercadopagoConfig/initialConfig";

export const POST = async (req: NextRequest) => { 
    try {
        const items: ICartItemResponse[] = await req.json();            
        const response = await sendPreferencesToMP(items);
        console.log("response",response);
        return NextResponse.json({ data: response, status: 200 })
    } catch (error:any) {
        await errorLogSave(error)    
        return NextResponse.json({ error: error.message, status: 500 })
    }
}