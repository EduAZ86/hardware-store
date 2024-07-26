import { SingUp } from "@/ui/components/AuthForm/SingUp";
import { BackgroundColor } from "@/ui/components/common";

function Register() {
    return (
        <main
            className="w-full h-full relative flex-col z-0 py-3"
        >
            <BackgroundColor
                backgroundColor="background"
            />
            <SingUp />
        </main>
    )
}

export default Register
