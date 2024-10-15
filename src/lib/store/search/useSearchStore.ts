import { create } from "zustand";
import { ISearchStore } from "./types";

export const useSearchStore = create<ISearchStore>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm: string) => set({ searchTerm }),
    clearTerm: () => set({ searchTerm: '' }),
}))