import { Dispatch, SetStateAction } from "react";

export interface IImagesPresenterProps {
    images: string[];
}

export interface IImagePreviewerProps {
    images: string[];
    setCurrentIndexImage: Dispatch<SetStateAction<number>>
}