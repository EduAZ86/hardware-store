"use client"
import { useDataFavorites } from "@/hooks/favorites/useDataFavorites";
import { PageContainer } from "@/ui/components/common";
import { FavoritesComponent } from "@/ui/components/Favorites/FavoritesComponent";
import { useParams } from "next/navigation";

function Favorites() {

    const { id: userID } = useParams();
    const { favoritesData, isLoading } = useDataFavorites().useGetFavorites(userID as string);
    return (
        <PageContainer>
            <FavoritesComponent
                favoritesData={favoritesData}
                isLoading={isLoading}
            />
        </PageContainer>
    )
}

export default Favorites