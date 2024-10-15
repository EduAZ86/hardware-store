import { IUser, IUserResponse } from "@/types/user.types";
import { AxiosInstance } from "axios";

export const getUserDataByID = async (userID: string, dataUsersInstance: AxiosInstance) => {
    const response = await dataUsersInstance.get(`/users/${userID}`,
        {
            params: {
                id: userID
            }
        }
    )
    return response.data.data as IUserResponse
}

export const getAllUsers = async (dataUsersInstance: AxiosInstance) => {
    const response = await dataUsersInstance.get("/users")
    return response.data.data as IUserResponse[]
}
export const updateUser = async (updatedUser: Partial<IUser>, userID: string, dataUsersInstance: AxiosInstance) => {

    const response = await dataUsersInstance.patch(`/users/${userID}`, updatedUser,
        {
            params: {
                id: userID
            }
        }
    )
    return response.data.data as IUserResponse
}

export const deleteUser = async (userID: string, dataUsersInstance: AxiosInstance) => {

    const response = await dataUsersInstance.delete(`/users/${userID}`,
        {
            params: {
                id: userID
            }
        }
    )
    return response.data.data as IUserResponse
}