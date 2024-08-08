import { withAuth } from "next-auth/middleware";
import {  NextRequest, NextResponse } from "next/server";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/",
        "/user",
        "/user/:path*",

    ]
}


// export default withAuth(
//     {
//         callbacks: {
//             authorized: ({ token }) => {
//                 console.log("middleware");
                
//                 return !!token
//             }
//         }
//     },


// )

// export const config = {
//     matcher: [
//         "/",
//         "/user",
//         "/user/:path*",
//         '/api/orders/:path*',
//         '/api/products/:path*',
//         '/api/carts/:path*',
//         '/api/errors/:path*'
//     ],
// }


// export default withAuth({
//     jwt: {
//         decode: authOptions.jwt?.decode,
//     },
//     callbacks: {
//         authorized: ({ token }) => !!token,
//     },
//     pages: {
//         signIn: "/login"
//     }
    
// })


