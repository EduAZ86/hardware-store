'use client'
import createAxiosInstance from "@/lib/axios/axiosInstance";
import { IProduct, IProductResponse } from "@/types/product.types";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useDataProducts = () => {
    const LENGTHPAGE = 10;
    const session = useSession();
    const getProductInstance = createAxiosInstance(true, session.data?.user?.token as string);

    const getAllProductsForPage = async ({ pageParam }: { pageParam: number }) => {
        try {
            const response = await getProductInstance.get(`products?lengthPage=${LENGTHPAGE}&offset=${pageParam * LENGTHPAGE}`);
            return {
                data: response.data.data as IProductResponse[],
                nextPage: pageParam + 1,
                isLastPage: response.data.data.length < LENGTHPAGE,
            };
        } catch (error) {
            console.log(error);
            throw new Error("Error fetching data");
        }
    };
    const getProductById = async ({ id }: { id: string }) => {
        const response = await getProductInstance.get(`products/${id}`);
        return response.data.data as IProductResponse;
    };

    const createProduct = async (newProduct: IProduct) => {
        const response = await getProductInstance.post('products', newProduct);
        return response.data.data as IProductResponse;
    };

    const updateProduct = async ({ id, updatedProduct }: { id: string, updatedProduct: Partial<IProduct> }) => {
        const response = await getProductInstance.put(`products/${id}`, updatedProduct);
        return response.data.data as IProductResponse;
    };

    const deleteProduct = async (id: string) => {
        const response = await getProductInstance.delete(`products/${id}`);
        return response.data.data as IProductResponse;
    };


    const useGetAllProducts = () => {
        return useInfiniteQuery({
            queryKey: ["products"],
            queryFn: getAllProductsForPage,
            getNextPageParam: (lastPage) => (lastPage.isLastPage ? undefined : lastPage.nextPage),
            initialPageParam: 0,
        });
    };

    const useGetProductById = () => {
        return useQuery({
            queryKey: ["products"],
            queryFn: (context) => getProductById({ id: context.queryKey[1] }),
        
        })
    };

    const useCreateProduct = () => {
        return useMutation({
            mutationKey: ["products"],
            mutationFn: (newProduct: IProduct) => createProduct(newProduct),
        })
    }

    const useDeleteProduct = () => {
        return useMutation({
            mutationKey: ["products"],
            mutationFn: (id: string) => deleteProduct(id),
        })
    }

    const useUpdateProduct = () => {
        return useMutation({
            mutationKey: ["products"],
            mutationFn: ({ id, updatedProduct }: { id: string, updatedProduct: Partial<IProduct> }) => updateProduct({ id, updatedProduct }),
        })
    }
    return {
        useGetAllProducts,
        useGetProductById,
        useCreateProduct,
        useUpdateProduct,
        useDeleteProduct,
    };
};
