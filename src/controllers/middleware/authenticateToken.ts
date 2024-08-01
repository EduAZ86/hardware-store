import { NextRequest, NextResponse } from "next/server"

const SECRET_KEY = process.env.NEXTAUTH_SECRET;

export const authenticateToken = (req: NextRequest,  next: () => void) => {
    const authHeader = req.headers.get('Authorization')
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return NextResponse.redirect(new URL('/', req.url))

    if (token !== SECRET_KEY) return NextResponse.redirect(new URL('/', req.url))
    next()
}