import { create } from "zustand";
import { IUseUIStore } from "./types";

export const useUIStore = create<IUseUIStore>((set) => ({
    isOpenModal: false,
    idEditModal: "",
    deleteData: {
        id: "",
        name: ""
    },
    onCloseModal: () => set({ isOpenModal: false }),
    onOpenModal: () => set({ isOpenModal: true }),
    setIdEditModal: (id: string) => set({ idEditModal: id }),
    clearIdEditModal: () => set({ idEditModal: "" }),
    setDeleteData: (deleteData: IUseUIStore["deleteData"]) => set({ deleteData }),
    clearDeleteData: () => set({ deleteData: { id: "", name: "" } })
}))