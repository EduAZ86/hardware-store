import { create } from "zustand";

export const useUserStore = create((set) => ({
    user: null,
    cart: [],
    // setUser: (user) => set({ user }),
    // setCart: (cart) => set({ cart }),
}))