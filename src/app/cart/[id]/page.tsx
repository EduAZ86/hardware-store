"use client";

import { useDataUserCart } from "@/hooks/carts/useDataUserCart";
import { useUserCartStore } from "@/lib/store/usercart/useUserCartStore";

import { CartComponent } from "@/ui";
import { PageContainer } from "@/ui/components/common";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function Cart() {

    const { id: userID } = useParams();
    const { cartData, setCartData, totalPrice } = useUserCartStore();
    const { data } = useDataUserCart().useGetCartUser(userID as string);

    useEffect(() => {
        if (data) {
            setCartData(data);
        }
    }, [data]);
    return (
        <div>
            <PageContainer>
                {cartData && cartData?.items?.length > 0 && (
                    <CartComponent cartData={cartData} totalPrice={totalPrice} />
                )}
            </PageContainer>
        </div>
    )
}

export default Cart;
