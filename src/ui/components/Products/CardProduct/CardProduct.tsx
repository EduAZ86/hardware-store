"use client"
import { FC, useState } from "react";
import { ICardProductProps } from "./types";
import { BackgroundColor, CardTitle } from "../../common";
import { twJoin } from "tailwind-merge";
import { Price } from "../../common/typography/Price/Price";
import { Category } from "../../common/typography/Category/Category";
import { Discount } from "./Discount";
import { CardButton } from "./CardButton/CardButton";
import { faCartShopping, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

export const CardProduct: FC<ICardProductProps> = ({
    dataProduct: {
        discount,
        id,
        image,
        price,
        category,
        title
    }
}) => {
    const [showButtons, setShowButtons] = useState<boolean>(false)
    const handleFocus = () => {
        setShowButtons(true)
    }
    const handleBlur = () => {
        setShowButtons(false)
    }

    const handleAddCart = () => {

    }


    const handleAddFav = () => {

    }


    const handleShare = () => {

    }

    const handleDetail = () => {

    }

    return (
        <div
            className={twJoin(
                "w-56 h-96 flex flex-col relative z-0 px-3 py-2 rounded-md gap-2 overflow-hidden border-solid border-2 border-transparent",
                "group hover:border-light-primary dark:hover:border-dark-primary",
                "cursor-pointer active:scale-[99%] duration-300"
            )}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            onClick={handleDetail}
        >
            {discount !== 0 && <Discount discount={discount} />}
            <div
                className={`
                    w-full h-3/5 object-cover overflow-hidden flex flex-col justify-center items-center
                `}
            >
                <img
                    className={`
                    w-full
                    object-cover
                `}
                    alt='image'
                    src={image}
                />
                {showButtons &&
                    <div
                        className={`
                        flex flex-row w-full absolute top-1/4 
                        items-center justify-evenly
                    `}
                    >
                        <CardButton
                            key={"cart"}
                            icon={faCartShopping}
                            onClick={handleAddCart}
                        />
                        <CardButton
                            key={"fav"}
                            icon={faHeart}
                            onClick={handleAddFav}
                        />
                        <CardButton
                            key={"share"}
                            icon={faShare}
                            onClick={handleShare}
                        />

                    </div>}
            </div>
            <div
                className="w-full h-2/5 flex flex-col relative justify-between pb-2 "
            >
                <Category text={category} />
                <CardTitle text={title} />
                <Price price={price} discount={discount} />
            </div>
            <BackgroundColor backgroundColor="background" />
        </div>
    )
}