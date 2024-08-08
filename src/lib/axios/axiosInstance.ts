import axios from "axios";
import { useSession } from "next-auth/react";

const { data: session } = useSession();

export const axiosJWTInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.token}`,
    },

})

export const axiosNoAuthInstance = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json",
    },
})