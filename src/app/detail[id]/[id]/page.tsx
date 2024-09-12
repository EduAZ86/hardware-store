"use client"
import { PageContainer } from "@/ui/components/common";
import { ProductDetail } from "@/ui/components/Detail/Detail";
import { useParams } from 'next/navigation';

function Detail() {
    const { id } = useParams();
    return (
        <PageContainer>
            <ProductDetail
                id={id as string}
            />
        </PageContainer>
    )
}

export default Detail