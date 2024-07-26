import { INewUser } from "@/types/user.types";
import fetchData from "./axios.config";
import { errorLogSave } from "@/services/error/errorLogService";


export const userRegister = async (newUser: INewUser) => {
    try {
        const response = await fetchData.post('auth/singup', newUser)
        return response.data    
    } catch (error) {
        await errorLogSave(error);
    }
}