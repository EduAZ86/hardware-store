import { create } from "zustand";
import { IUseUIStore } from "./types";

export const useUIStore = create<IUseUIStore>((set) => ({
    isOpenModal: false,
    onCloseModal: () => set({ isOpenModal: false }),
    onOpenModal: () => set({ isOpenModal: true }),
}))