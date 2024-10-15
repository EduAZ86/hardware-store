import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteUser, getAllUsers, getUserDataByID, updateUser } from "./fetchingUserData"
import { useSession } from "next-auth/react";
import createAxiosInstance from "@/lib/axios/axiosInstance";
import { IUser } from "@/types/user.types";

export const useDataUser = () => {

    const session = useSession();
    const id = session.data?.user?.userData?._id as string;
    const orderDataAxiosInstance = createAxiosInstance(true, id);

    const useGetUserByID = (userID: string) => {
        return useQuery({
            queryKey: ["user"],
            queryFn: () => getUserDataByID(userID, orderDataAxiosInstance),
        })
    }

    const useGetAllUsers = () => {
        return useQuery({
            queryKey: ["users"],
            queryFn: () => getAllUsers(orderDataAxiosInstance),
        })
    }

    const useUpdateUser = (userID: string) => {
        return useMutation({
            mutationKey: ["user"],
            mutationFn: (updatedUser: Partial<IUser>) => updateUser(updatedUser, userID, orderDataAxiosInstance)
        })
    }

    const useDeleteUser = (userID: string) => {
        return useMutation({
            mutationKey: ["user"],
            mutationFn: () => deleteUser(userID, orderDataAxiosInstance)
        })
    }

    return {
        useGetUserByID,
        useGetAllUsers,
        useUpdateUser,
        useDeleteUser
    }
}