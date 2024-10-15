import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (req.nextUrl.pathname === "/api/products" && req.method === "GET") {
        return NextResponse.next();
    }

    if (!session) {
        if (req.nextUrl.pathname.startsWith("/api")) {
            return new NextResponse(
                JSON.stringify({ message: "Authentication required" }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        } else {
            const url = req.nextUrl.clone();
            url.pathname = "/auth/login";
            url.search = `p=${req.nextUrl.pathname}`;
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/detail/:path*",
        "/inventary:path*",
        "/checkout:path*",
        "/favorites/:path*",
        "/payment/:path*",
        "/newproduct",
        "/api/products/:path*",
        "/api/orders/:path*",
        "/api/carts/:path*",            
    ]
}