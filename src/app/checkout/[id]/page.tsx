"use client"
import { CheckoutComponent } from "@/ui/components/Checkout/Checkout"
import { PageContainer } from "@/ui/components/common"
import { useParams } from "next/navigation";

function Checkout() {
    const { id: userID } = useParams();
    return (
        <PageContainer>
            <CheckoutComponent userID={userID as string} />
        </PageContainer>
    )
}

export default Checkout