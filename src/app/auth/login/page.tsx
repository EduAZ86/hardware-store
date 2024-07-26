import { SingIn } from "@/ui/components/AuthForm/SingIn";
import { BackgroundColor } from "@/ui/components/common";

function Login() {
    return (
        <main
            className="w-full h-full relative flex-col z-0 py-3"
        >
            <BackgroundColor
                backgroundColor="background"
            />
            <SingIn />
        </main>
    )
}

export default Login