"use client";
import { CartComponent } from "@/ui";
import { useParams } from "next/navigation";
import { PageContainer } from "@/ui/components/common";

function Cart() {
    const { id: userID } = useParams();
 
    return (
        <PageContainer>
            <CartComponent userID={userID as string} />
        </PageContainer>
    )
}
export default Cart;
