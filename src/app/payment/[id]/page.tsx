"use client";
import { useOrderData } from "@/hooks/orders/useDataOrder";
import { MercadopagoCheckoutPro } from "@/ui";
import { PageContainer, Title } from "@/ui/components/common";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

function Payment() {
    const { id: orderID } = useParams();
    const { data: order } = useOrderData().useGetOrderByOrderID(orderID as string);
    const session = useSession();
    const userID = session.data?.user?.userData?._id as string;

    return (
        <PageContainer>
            {order
                ?
                <MercadopagoCheckoutPro
                    key={orderID as string}
                    items={order?.items}
                    userID={userID}
                />
                :
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <Title
                        key={"notFound"}
                        text="Order not found"
                    />
                </div>
            }
        </PageContainer>
    )
}
export default Payment


// http://localhost:3000/payment/66feb0c021e0afe8ec6f3254