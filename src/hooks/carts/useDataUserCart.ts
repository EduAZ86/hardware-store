"use client"
import { useMutation, useQuery } from "@tanstack/react-query";
import createAxiosInstance from "@/lib/axios/axiosInstance";
import { ICart, ICartResponse } from "@/types/cart.types";
import { useSession } from "next-auth/react";
import { addProductToCart, deleteProductCart, getCartUser, updateCart, updateProductsCart } from "./fetchingCartData";
import { useEffect } from "react";
import { useUserCartStore } from "@/lib/store/usercart/useUserCartStore";

export const useDataUserCart = () => {

    const session = useSession();
    const id = session.data?.user?.userData?._id as string;
    const dataUserCartInstance = createAxiosInstance(true, id);
    const { cartData, setCartData, totalPrice } = useUserCartStore();

    const useGetCartUser = (userID: string) => {
        const { data: cart, isSuccess, error, refetch, isLoading } = useQuery({
            queryKey: ["userCart"],
            queryFn: () => getCartUser(userID, dataUserCartInstance)
        })
        useEffect(() => {
            if (isSuccess && cart) {
                setCartData(cart);
            }
            return () => {
                refetch();
                setCartData(cart as ICartResponse);
            }
        }, [isSuccess, cart])

        return {
            cartData,
            refetch,
            error,
            isLoading,
            totalPrice
        }
    };

    const useAddProductToCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: (productID: string) => addProductToCart(productID, id, dataUserCartInstance),
            onSuccess(data) {
                setCartData(data);
            }
        })
    }

    const useUpdateCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: (updatedCart: ICart) => updateCart(updatedCart, id, dataUserCartInstance),
            onSuccess(data) {
                setCartData(data);
            }

        })
    };

    const useUpdateProductsCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: ({ productID, quantity }: { productID: string, quantity: number }) => updateProductsCart({ productID, quantity }, id, dataUserCartInstance),
            onSuccess(data) {
                setCartData(data);
            }
        })
    }

    const useDeleteProductCart = () => {
        return useMutation({
            mutationKey: ["userCart"],
            mutationFn: (productID: string) => deleteProductCart(productID, id, dataUserCartInstance),
            onSuccess(data) {
                setCartData(data);
            }
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