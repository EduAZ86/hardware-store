import { FC, useState } from "react";
import { IUserPageComponentProps, optionButtonSelect } from "./types";
import { useDataUser } from "@/hooks/user/useDataUser";
import { ProfileCard } from "./ProfileCard/ProfileCard";
import { Loader } from "../common";
import { Toaster, toast } from "react-hot-toast";
import { AcountDataForm } from "./AcountDataForm/AcountDataForm";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CartComponent } from "../Cart/CartComponent";
import { OrdersSummaryViewer } from "./OrdersSummaryViewer/OrdersSummaryViewer";

export const UserPageComponent: FC<IUserPageComponentProps> = ({
    userID
}) => {
    const router = useRouter()
    const {
        data: userData,
        isLoading,
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
                    {(userData)
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
                                {currentOption === "cart" && <div className="max-h-[80vh] overflow-y-scroll"><CartComponent userID={userID} /></div>}
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

