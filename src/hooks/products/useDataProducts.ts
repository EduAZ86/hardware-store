'use client'
import createAxiosInstance from "@/lib/axios/axiosInstance";
import { IProduct, IProductResponse } from "@/types/product.types";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getAllProducts } from "./fetchingProductData";
import { TSortOptions } from "@/types/userInterface.types";

export const useDataProducts = () => {
    const LENGTHPAGE = 10;
    const session = useSession();
    const getProductInstance = createAxiosInstance(true, session.data?.user?.token as string);
    const getAllProductsInfinite = createAxiosInstance(false, session.data?.user?.token as string);

    const getProductById = async ({ id }: { id: string }) => {
        const response = await getProductInstance.get(`/products/${id}`, {
            params: {
                id: id
            }
        });
        return response.data.data as IProductResponse;
    };

    const getAllInventary = async () => {
        const response = await getAllProductsInfinite.get("inventary");
        return response.data.data as IProductResponse[];
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
        const response = await getProductInstance.delete(`products/${id}`, {
            params: {
                id: id
            }
        });
        return response.data.data as IProductResponse;
    };

    const useGetAllProducts = (sortOption?: TSortOptions, searchTerm?: string) => {
        return useInfiniteQuery({
            queryKey: ["products"],
            queryFn: ({ pageParam = 0 }) => getAllProducts({
                pageParam: pageParam,
                LENGTHPAGE: LENGTHPAGE,
                dataProductsInstance: getAllProductsInfinite,
                sortOption: sortOption,
                searchTerm: searchTerm
            }),
            getNextPageParam: (lastPage) => (lastPage.isLastPage ? undefined : lastPage.nextPage),
            initialPageParam: 0,
        });
    };


    const useGetAllInventary = () => {
        return useQuery({
            queryKey: ["inventary"],
            queryFn: getAllInventary,
        })
    };

    const useGetProductById = ({ id }: { id: string }) => {
        return useQuery({
            queryKey: ["products", id],
            queryFn: (context) => getProductById({ id: context.queryKey[1] }),
            enabled: !!id
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
        useGetAllInventary
    };
};
