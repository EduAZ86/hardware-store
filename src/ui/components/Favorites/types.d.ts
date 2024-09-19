import { IFavoritesResponse } from "@/types/favorites";

export interface IFavoritesComponentProps {
    favoritesData: IFavoritesResponse;
    isLoading: boolean;
}