
import { AuthImg } from "@/ui/components/AuthComponents/AuthImg";
import { SingIn } from "@/ui/components/AuthComponents/SingIn";
import { BackgroundColor } from "@/ui/components/common";

function Login() {
    return (
        <main
            className="w-full min-h-screen h-full relative flex flex-row"
        >
            <BackgroundColor
                backgroundColor="background"
            />
            <AuthImg />
            <div className="w-full h-full flex  justify-end relative">
                <SingIn />
            </div>
        </main>
    )
}

export default Login