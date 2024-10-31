
import { AuthImg } from "@/ui/components/AuthComponents/AuthImg";
import { SingUp } from "@/ui/components/AuthComponents/SingUp";
import { BackgroundColor } from "@/ui/components/common";

function Register() {
    return (
        <main
            className="w-full min-h-screen h-full relative flex flex-row"
        >
            <BackgroundColor
                backgroundColor="background"
            />
            <AuthImg />
            <div className="w-full h-full flex  justify-end relative">
                <SingUp />
            </div>
        </main>
    )
}

export default Register
