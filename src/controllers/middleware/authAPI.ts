import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export const withAuthUser = async () => {
    const session = await getServerSession(authOptions);
    console.log("withAuthUser", session);

    if (!session) {
        return { access: false, status: 401 }
    }
    return { access: true, status: 401 }
}
