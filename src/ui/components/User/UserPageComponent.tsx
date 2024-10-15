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
    const { data: userData, isLoading, error: errorDataUSer } = useDataUser().useGetUserByID(userID);
    const [currentOption, setCurrentOption] = useState<optionButtonSelect>("account")
    if (errorDataUSer) {
        console.log("error", errorDataUSer)
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
        <div className="w-full h-[80vh] flex flex-col px-6 relative">
            {isLoading
                ?
                <Loader />
                :
                <>
                    {(userData)
                        ?
                        <div className={`
                                w-full h-full                                
                                grid grid-cols-4
                                relative
                                p-4
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
                                className="h-full col-span-3 flex flex-col 
                                    rounded-lg
                                    border-2 border-light-acent
                                    dark:border-dark-acent
                                    "
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

