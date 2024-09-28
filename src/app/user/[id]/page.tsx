import { PageContainer } from "@/ui/components/common";
import { UserPageComponent } from "@/ui/components/User/UserPageComponent";
import { useParams } from "next/navigation";

function User() {
    const { id: userID } = useParams();
    return (
        <PageContainer>
            <UserPageComponent
                userID={userID as string}
            />
        </PageContainer>
    )
}