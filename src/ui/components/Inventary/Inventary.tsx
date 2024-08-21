"use client"
import { FC, useEffect, useState } from "react";
import { IInventaryProps } from "./types";
import { useDataProducts } from "@/hooks/products/useDataProducts";
import { InvetaryTable } from "./InventaryTable/IntentaryTable";
import { IProductDataTable } from "./InventaryTable/types";
import { Modal } from "../common/modal/Modal";
import { useUIStore } from "@/lib/store/userInterface/useUIStore";
import { ButtonWithText, Title } from "../common";
import { UpdateDataProducts } from "../UpdateDataProducts/UpdateDataProducts";

export const ProductsInventary: FC<IInventaryProps> = ({
}) => {
    const { useGetAllInventary } = useDataProducts()
    const { deleteData, clearDeleteData, clearIdEditModal, idEditModal } = useUIStore()
    const [openModalCreate, setOpenModalCreate] = useState<boolean>(false)
    const { data: products, refetch: refetchInventary } = useGetAllInventary()
    const [dataTable, setDataTable] = useState<IProductDataTable[] | undefined>([])
    const { mutate: deleteProduct } = useDataProducts().useDeleteProduct()
    useEffect(() => {
        const dataInventary: IProductDataTable[] | undefined = products?.map((product) => {
            const item: IProductDataTable = {
                id: product._id,
                name: product.name,
                category: product.category,
                brand: product.brand,
                sku: product.sku,
                averageRating: product.averageRating || 0,
                stock: product.stock,
                image: product.images[0],
                price: product.price.price
            }
            return item
        })
        setDataTable(dataInventary)
    }, [products])

    const onDeleteProduct = () => {
        if (deleteData.id) {
            deleteProduct(deleteData.id, {
                onSuccess: () => {
                    clearDeleteData()
                    refetchInventary()
                }
            })

        }
    }

    return (
        <div
            className={`
                w-full h-full
                flex flex-col
                gap-3
                justify-center
                items-center
                relative
            `}
        >
            <div className="w-full h-10 flex flex-row justify-between items-center pl-1 pr-2">
                <Title text="Inventary" />
                <ButtonWithText
                    buttonSize="middle"
                    buttonVariant="backgroundColor"
                    textButton="+"
                    title="add"
                    onClick={() => setOpenModalCreate(true)}
                />
            </div>
            <InvetaryTable
                data={dataTable || []}
            />
            <Modal
                title="Edit product"
                onCloseModal={clearIdEditModal}
                isOpen={idEditModal !== ''}
            >
                <div className="w-full h-full relative overflow-y-scroll">
                    <UpdateDataProducts
                        variant="update"
                        ProductID={idEditModal}
                        title="Edit product"
                    />

                </div>
            </Modal>
            <Modal
                title="Create Product"
                onCloseModal={() => setOpenModalCreate(false)}
                isOpen={openModalCreate}
            >
                <div className="w-full h-full relative overflow-y-scroll">
                    <UpdateDataProducts
                        variant="create"
                        title="Create product"
                    />

                </div>
            </Modal>
            <Modal
                title="Delete product"
                onCloseModal={clearDeleteData}
                isOpen={deleteData.id !== ''}

            >
                <div
                    className="w-full h-full flex flex-col justify-center items-center gap-6"
                >
                    <span>{deleteData ? deleteData?.name : ""}</span>
                    <div className="w-full flex flex-row justify-center items-center gap-6">

                        <ButtonWithText
                            onClick={() => onDeleteProduct()}
                            key={"confirm"}
                            title="confirm"
                            buttonSize="middle"
                            textButton="Confirm"
                            buttonVariant="backgroundColor"
                        />
                        <ButtonWithText
                            onClick={() => clearDeleteData()}
                            key={"cancel"}
                            title="cancel"
                            buttonSize="middle"
                            textButton="Cancel"
                            buttonVariant="backgroundColor"
                        />
                    </div>
                </div>

            </Modal>
        </div>
    )
}