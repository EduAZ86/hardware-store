import { FC } from "react";
import { IFavoritesComponentProps } from "./types";
import { Loader, MainTitle } from "../common";
import { FavoritesCard } from "./FavoritesCard/FavoritesCard";

export const FavoritesComponent: FC<IFavoritesComponentProps> = ({
    favoritesData,
    isLoading
}) => {
    return (
        <div
            className={`
            w-full h-full min-h-screen flex flex-col px-8 py-2 gap-4   
          `}
        >
            <MainTitle text="Favorites" />
            {isLoading ?
                <Loader />
                :
                <>
                    {favoritesData?.items.map((item) => {
                        return (
                            <FavoritesCard
                                key={item.productID}
                                item={item}
                            />
                        )
                    })}
                </>
            }

        </div>
    )
}