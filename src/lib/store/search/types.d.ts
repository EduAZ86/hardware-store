
export interface ISearchStore {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
    clearTerm: () => void
}