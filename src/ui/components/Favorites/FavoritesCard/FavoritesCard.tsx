import { FC } from "react";
import { IFavoritesCardProps } from "./types";
import { IconButton } from "../../common";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useDataFavorites } from "@/hooks/favorites/useDataFavorites";

export const FavoritesCard: FC<IFavoritesCardProps> = ({ item }) => {
    const { mutate: deleteProduct } = useDataFavorites().useDeleteProductOfFavorites();
   
    return (
        <div className={`
        w-full h-fit relative
        grid grid-cols-5 
        justify-between items-center
        text-light-text dark:text-dark-text
        gap-3
        border-2 border-light-primary dark:border-dark-primary p-4
        rounded-lg
        `}>
            <img
                src={item.image}
                className="w-24 h-24 object-cover col-span-1"
            />
            <p
                className="col-span-3 text-lg font-medium text-wrap"
            >
                {item.name}
            </p>
            <div
                className="col-span-1 flex flex-row justify-end items-center"
            >
                <IconButton
                    key={"delete"}
                    icon={faX}
                    onClick={() => deleteProduct(item.productID)}
                />
            </div>
        </div>
    )
}