import { FC, useState } from "react"
import { Category } from "../../common/typography/Category/Category"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DropDownMenu } from "../../common"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Price } from "../../common/typography/Price/Price"

export const Cart: FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const totalPriceKart = 50
    return (
        <div
            className={`
                md:w-40 w-20
                 h-full
                display flex flex-row-reverse gap-2
                relative
                justify-evenly items-start             
                group       
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
                md:flex hidden flex-col
                justify-around items-center
                
                `}
            >
                <span
                    className={`
                        text-xs text-center
                        text-light-text dark:text-dark-text
                        group-hover:text-light-primary group-hover:dark:text-dark-primary
                    `}
                >
                </span>
                <Category
                    text="Cart"
                />
                <Price price={totalPriceKart} />

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
                <ul className="flex flex-col gap-2">
                    {/* <ListLI key="user"><Link href={`/user/${user?.username}`}>configuration</Link></ListLI>
                <ListLI key="Logout"><button onClick={() => signOut()}>logout</button></ListLI>
                <ListLI key="theme">theme: <ThemeSwitcher /></ListLI> */}
                </ul>
            </DropDownMenu>
        </div>
    )
}