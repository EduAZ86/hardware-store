"use client";
import { CartComponent } from "@/ui";
import { useParams } from "next/navigation";
import { PageContainer } from "@/ui/components/common";
import { useDataUserCart } from "@/hooks/carts/useDataUserCart";

function Cart() {
    const { id: userID } = useParams();
    const { cartData, totalPrice } = useDataUserCart().useGetCartUser(userID as string);
    return (
        <PageContainer>
            <CartComponent cartData={cartData} totalPrice={totalPrice} />
        </PageContainer>
    )
}
export default Cart;
