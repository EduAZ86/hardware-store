
export interface IUseFavoritesStore {
    favoritesData: IFavoritesResponse;
    setFavoritesData: (favoritesData: IFavoritesResponse) => void;
    removeItemFavorites: (productID: string) => void;
    addProductToFavorites: (Item: string) => void;
}