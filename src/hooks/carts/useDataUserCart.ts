"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import createAxiosInstance from "@/lib/axios/axiosInstance";
import { ICart, ICartResponse } from "@/types/cart.types";
import { useSession } from "next-auth/react";

export const useDataUserCart = () => {

    const session = useSession();
    const id = session.data?.user?.userData?._id as string;
    const dataUserCartInstance = createAxiosInstance(true, id);

    const getCartUser = async (userID: string) => {
        try {
            const response = await dataUserCartInstance.get(`/usercart/`,
                {
                    params: {
                        userID: userID
                    }
                }
            );
            return response.data.data as ICartResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    }

    const addProductToCart = async (productID: string) => {
        try {
            const response = await dataUserCartInstance.post(`/usercart`,
                { productID: productID },
                {
                    params: {
                        id: id
                    }
                }
            );
            return response.data.data as ICartResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    }

    const updateCart = async (updatedCart: ICart) => {
        try {
            const response = await dataUserCartInstance.put(`/usercart`,
                updatedCart,
                {
                    params: {
                        id: id
                    }
                }
            );
            return response.data.data as ICartResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    }

    const updateProductsCart = async ({ productID, quantity }: { productID: string, quantity: number }) => {
        try {
            const response = await dataUserCartInstance.patch(`/usercart`,
                {
                    productID: productID,
                    quantity: quantity
                },
                {
                    params: {
                        id: id
                    }
                }
            );
            return response.data.data as ICartResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    }

    const deleteProductCart = async (productID: string) => {
        try {
            const response = await dataUserCartInstance.delete(`/usercart`, {
                params: {
                    productID: productID
                }
            });
            return response.data.data as ICartResponse
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    }

    const useGetCartUser = (userID: string) => {
        const Query = useQuery({
            queryKey: ["userCart"],
            queryFn: () => getCartUser(userID),

        });
        return Query
    };

    const useAddProductToCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: (productID: string) => addProductToCart(productID)
        })
    }

    const useUpdateCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: (updatedCart: ICart) => updateCart(updatedCart),
        })
    };

    const useUpdateProductsCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: ({ productID, quantity }: { productID: string, quantity: number }) => updateProductsCart({ productID, quantity }),

        })
    }

    const useDeleteProductCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: (productID: string) => deleteProductCart(productID),

        })
    }

    return {
        useUpdateCart,
        useGetCartUser,
        useAddProductToCart,
        useUpdateProductsCart,
        useDeleteProductCart
    }
}