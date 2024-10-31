
import { AuthImg } from "@/ui/components/AuthComponents/AuthImg"
import { ForgotPassword } from "@/ui/components/AuthComponents/ForgotPassword"
import { BackgroundColor } from "@/ui/components/common"

function Recovery() {
    return (
        <main
            className="w-screen min-h-screen h-full relative flex flex-row overflow-hidden"
        >
            <BackgroundColor
                backgroundColor="background"
            />
            <AuthImg />
            <div className="w-full h-full flex  justify-end relative">
                <ForgotPassword />
            </div>
        </main>
    )
}

export default Recovery