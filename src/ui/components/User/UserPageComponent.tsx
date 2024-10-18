"use client"
import { Loader } from "../common";
import { FC, useState } from "react";
import { signOut } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import { CartComponent } from "../Cart/CartComponent";
import { useDataUser } from "@/hooks/user/useDataUser";
import { ProfileCard } from "./ProfileCard/ProfileCard";
import { AcountDataForm } from "./AcountDataForm/AcountDataForm";
import { IUserPageComponentProps, optionButtonSelect } from "./types";
import { OrdersSummaryViewer } from "./OrdersSummaryViewer/OrdersSummaryViewer";

export const UserPageComponent: FC<IUserPageComponentProps> = ({
    userID
}) => {
    const {
        data: userData,
        isLoading,
        isSuccess,
        error: errorDataUSer
    } = useDataUser().useGetUserByID(userID);
    const [currentOption, setCurrentOption] = useState<optionButtonSelect>("account")
    if (errorDataUSer) {
        toast.error(errorDataUSer.message, {
            duration: 4000
        })
    }
    const handleSelect = (buttonId: optionButtonSelect) => {
        setCurrentOption(buttonId)
        if (buttonId === "logout") {
            signOut({ callbackUrl: "/" })
        }
    }

    return (
        <div className={`
        w-full h-full 
        min-h-[calc(100vh-88px)] 
        flex flex-col 
        md:px-6 px-2 
        relative
        `}>
            {isLoading
                ?
                <Loader />
                :
                <>
                    {(isSuccess)
                        ?
                        <div className={`
                                w-full h-full                                
                                grid 
                                md:grid-cols-4
                                md:grid-rows-1
                                grid-rows-auto
                                grid-cols-1
                                relative
                                md:p-4 p-2
                                gap-4
                            `}>
                            <ProfileCard
                                userName={userData?.username}
                                email={userData?.email}
                                imageProfile={userData?.picture}
                                handleSelect={handleSelect}
                                currentSelected={currentOption}
                            />
                            <div
                                className={`
                                    h-full 
                                    md:col-span-3
                                    col-span-1 
                                    flex flex-col 
                                    rounded-lg
                                    border-2 border-light-acent
                                    dark:border-dark-acent
                                    `}
                            >
                                {currentOption === "account" && <AcountDataForm currentUserData={userData} />}
                                {currentOption === "cart" && <div className="max-h-[80vh] overflow-y-scroll mb-2"><CartComponent userID={userID} /></div>}
                                {currentOption === "orders" && <OrdersSummaryViewer userID={userID} />}
                            </div>
                        </div>
                        :
                        <Toaster />
                    }

                </>
            }
        </div>
    )
}

