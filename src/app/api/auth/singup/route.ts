
import connectDB from "@/lib/db/db"
import { registerUser } from "@/services/auth/authServices"
import { errorLogSave } from "@/services/error/errorLogService"
import { NextRequest, NextResponse } from "next/server"
export const POST = async (req: NextRequest) => {
    try {
        await connectDB()
        const data = await req.json()
        const response = await registerUser(data)
        return NextResponse.json({ data: response, success: true })
    } catch (error: any) {
        errorLogSave(error)
        return NextResponse.json({ error: error.message })
    }
}   