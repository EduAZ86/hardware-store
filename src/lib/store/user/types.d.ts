import { DefaultSession } from "next-auth"

export interface IUseUserStore {
    user: DefaultSession
    cart: any
    setUser: (user: any) => void
    setCart: (cart: any) => void
}