import { FC } from "react";
import { ISingUpProps } from "./types";
import { Title } from "../common/typography";
import { BackgroundColor, ButtonWithText } from "../common";

export const SingUp: FC<ISingUpProps> = () => {
    return (
        <div
            className={`
                w-full h-full
                flex flex-col
                items-center justify-center gap-2                
            `}
        >
            <Title text="Register" />
            <form
                className={`
                    w-1/3 h-5/6
                     relative z-0                   
                    flex flex-col
                    p-4 rounded-md overflow-hidden gap-2
                `}
            >

                <BackgroundColor backgroundColor="acent" />
                <input />
                <input />
                <input />
                <ButtonWithText buttonSize="full" textButton="Register" buttonVariant="backgroundColor" />

            </form>

        </div>
    )
}