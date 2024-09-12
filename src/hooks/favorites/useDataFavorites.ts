"use client"

import createAxiosInstance from "@/lib/axios/axiosInstance";
import { IFavoritesResponse } from "@/types/favorites";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useDataFavorites = () => {
    const session = useSession();
    const userID = session.data?.user?.userData?._id as string;
    const dataFavoritesInstance = createAxiosInstance(true, userID);
    const getFavorites = async () => {
        try {
            const response = await dataFavoritesInstance.get("/favorites", {
                params: {
                    userID: userID
                }
            })
            return response.data.data as IFavoritesResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    };

    const addProductToFavorites = async (productID: string) => {
        try {
            const response = await dataFavoritesInstance.post("/favorites",
                {
                    params: {
                        userID: userID,
                        productID: productID
                    }
                }
            )
            return response.data.data as IFavoritesResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    };

    const deleteProductFavorites = async (productID: string) => {
        try {
            const response = await dataFavoritesInstance.delete("/favorites", {
                params: {
                    userID: userID,
                    productID: productID
                }
            })
            return response.data.data as IFavoritesResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    };

    const updateFavorites = async (updatedFavorites: IFavoritesResponse) => {
        try {
            const response = await dataFavoritesInstance.patch("/favorites", updatedFavorites, {
                params: {
                    userID: userID,
                }
            })
            return response.data.data as IFavoritesResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    };

    const useGetFavorites = () => {
        return useQuery({
            queryKey: ["favorites"],
            queryFn: () => getFavorites(),
        })
    };

    const useAddProductToFavorites = () => {
        return useMutation({
            mutationKey: ["favorites"],
            mutationFn: (productID: string) => addProductToFavorites(productID),
        })
    };

    const useDeleteProductOfFavorites = () => {
        return useMutation({
            mutationKey: ["favorites"],
            mutationFn: (productID: string) => deleteProductFavorites(productID),
        })
    };

    const useUpdateFavorites = () => {
        return useMutation({
            mutationKey: ["favorites"],
            mutationFn: (updatedFavorites: IFavoritesResponse) => updateFavorites(updatedFavorites),
        })
    };

    return {
        useGetFavorites,
        useAddProductToFavorites,
        useDeleteProductOfFavorites,
        useUpdateFavorites
    }
}