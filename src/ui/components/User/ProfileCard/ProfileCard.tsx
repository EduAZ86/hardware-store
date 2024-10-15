import { FC } from "react";
import { IProfileCardProps } from "./types";
import { ButtonIconAndText, CardTitle } from "../../common";
import { faBox, faShoppingCart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

export const ProfileCard: FC<IProfileCardProps> = ({
    userName,
    email,
    imageProfile,
    handleSelect,
    currentSelected

}) => {

    return (
        <div
            className="
                col-span-1
                flex flex-col                
                justify-center items-center
                p-4
                rounded-lg
                border-2 border-light-acent
                dark:border-dark-acent         
                "
        >
            <div
                className="
                    w-full h-fit
                    flex flex-col                
                    gap-6
                    justify-center items-center
                    pt-4 pb-8
                    border-b-2 border-light-acent
                    dark:border-dark-acent
                    "
            >
                <img
                    src={imageProfile}
                    alt="profile"
                    className="
                        w-32 h-32
                        rounded-full
                        border-2
                        border-light-primary
                        dark:border-dark-primary
                        "
                />
                <CardTitle key="userName" text={userName} />
                <span className="text-xs text-light-text dark:text-dark-text font-light opacity-70">{email}</span>
            </div>
            <div className="w-full h-full flex flex-col justify-start pt-8 pb-4 gap-4">
                <ButtonIconAndText
                    key={"Account"}
                    icon={faUser}
                    isActive={currentSelected === "account"}
                    text="Account"
                    onClick={() => handleSelect("account")}
                />
                <ButtonIconAndText
                    key={"Orders"}
                    icon={faBox}
                    text="Orders"
                    isActive={currentSelected === "orders"}
                    onClick={() => handleSelect("orders")}
                />
                <ButtonIconAndText
                    key={"Cart"}
                    icon={faShoppingCart}
                    text="Cart"
                    isActive={currentSelected === "cart"}
                    onClick={() => handleSelect("cart")}
                />
                <ButtonIconAndText
                    key={"signOut"}
                    icon={faSignOut}
                    isActive={currentSelected === "logout"}
                    text="Sign Out"
                    onClick={() => handleSelect("logout")}
                />
            </div>

        </div>
    )
}