import axios from "axios";

export default function createAxiosInstance(isAuth: boolean, token: string) {
    if (isAuth) {
        return axios.create({
            baseURL: "/api",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },

        })
    }
    return axios.create({
        baseURL: "/api",
        headers: {
            "Content-Type": "application/json",
        },
    })
}
