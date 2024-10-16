"use client"
import { FC, useState } from "react";
import { Category } from "../../common/typography/Category/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropDownMenu } from "../../common";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Price } from "../../common/typography/Price/Price";
import { ICartNavBarProps } from "./types";
import { useRouter } from "next/navigation";
import { useDataUserCart } from "@/hooks/carts/useDataUserCart";

export const Cart: FC<ICartNavBarProps> = ({
    userID
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { totalPrice, cartData } = useDataUserCart().useGetCartUser(userID);

    const router = useRouter();
    const handleCartClick = () => {
        router.replace(`/cart/${userID}`);
    }

    return (
        <div
            className={`
                md:w-48 
                 h-full
                display flex 
                flex-row-reverse 
                gap-2
                relative
                justify-center items-center           
                group       
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCartClick}
        >
            <div
                className={`
                md:flex hidden flex-col
                justify-around items-center
                
                `}
            >
           
                <Category
                    text="Cart"
                />
                <Price
                    price={totalPrice}
                    size="sm"
                />
            </div>
            <span
                className={`
                        w-8 h-8 rounded-full                   
                        border-2 border-light-acent dark:border-dark-acent
                        cursor-pointer
                        flex flex-row justify-center items-center 
                        hover: duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary               
                    `}
            >
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="text-md text-center text-light-text dark:text-dark-text"
                />
            </span>
            <DropDownMenu
                key="session"
                isHovered={isHovered}
                backgroundColor="primary"
            >
                <ul className="h-fit flex flex-col gap-2">
                    {cartData?.items?.map((product) => (
                        <li
                            key={product.productID}
                            className="flex flex-row justify-around gap-2 text-light-text dark:text-dark-text overflow-hidden"
                        >
                            <span className="text-sm">{product.quantity}</span>
                            <img src={product.image} className="w-6 h-6" />
                            <span className="text-xs truncate">{product.name}</span>
                        </li>
                    ))}
                </ul>
            </DropDownMenu>
        </div>
    )
}