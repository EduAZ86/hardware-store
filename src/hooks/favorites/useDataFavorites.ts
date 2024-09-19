"use client"

import createAxiosInstance from "@/lib/axios/axiosInstance";
import { IFavoritesResponse } from "@/types/favorites";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { addProductToFavorites, deleteProductFavorites, getFavorites, updateFavorites } from "./fetchingData";
import { useFavoritesStore } from "@/lib/store/favorites/useFavoritesStore";
import { useEffect } from "react";

export const useDataFavorites = () => {
    const session = useSession();
    const id = session.data?.user?.userData?._id as string;
    const { favoritesData, setFavoritesData } = useFavoritesStore();
    const dataFavoritesInstance = createAxiosInstance(true, id);

    const useGetFavorites = (userID: string) => {
        const { data: favorites, isSuccess, error, refetch, isLoading } = useQuery({
            queryKey: ["favorites"],
            queryFn: () => getFavorites(userID, dataFavoritesInstance),

        })
        useEffect(() => {
            if (isSuccess && favorites) {
                setFavoritesData(favorites);
            }
            return () => {
                refetch();
                setFavoritesData(favorites);
            }
        }, [isSuccess, favorites]);

        return {
            favoritesData,
            refetch,
            error,
            isLoading
        }
    };

    const useAddProductToFavorites = () => {
        const { mutate: addToFav } = useMutation({
            mutationKey: ["favorites"],
            mutationFn: (productID: string) => addProductToFavorites(productID, id, dataFavoritesInstance),
            onSuccess(data) {
                setFavoritesData(data)
            },
        })
        return addToFav
    };

    const useDeleteProductOfFavorites = () => {
        return useMutation({
            mutationKey: ["favorites"],
            mutationFn: (productID: string) => deleteProductFavorites(productID, id, dataFavoritesInstance),
            onSuccess(data) {
                setFavoritesData(data)
            },
        })
    };

    const useUpdateFavorites = () => {
        return useMutation({
            mutationKey: ["favorites"],
            mutationFn: (updatedFavorites: IFavoritesResponse) => updateFavorites(updatedFavorites, id, dataFavoritesInstance),
            onSuccess(data) {
                setFavoritesData(data)
            },
        })
    };

    return {
        useGetFavorites,
        useAddProductToFavorites,
        useDeleteProductOfFavorites,
        useUpdateFavorites
    }
}