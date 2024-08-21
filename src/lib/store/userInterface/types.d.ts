type TDeleteData = {
    id: string;
    name: string;
}

export interface IUseUIStore {
    isOpenModal: boolean;
    idEditModal: string;
    deleteData: TDeleteData;
    setIdEditModal: (id: string) => void;
    clearIdEditModal: () => void;
    onCloseModal: () => void;
    onOpenModal: () => void;
    clearDeleteData: () => void;
    setDeleteData: (deleteData: TDeleteData) => void;
}