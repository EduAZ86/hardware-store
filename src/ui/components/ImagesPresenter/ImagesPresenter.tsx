"use client"
import { FC, useState } from "react";
import { IImagesPresenterProps } from "./types";
import { ImagePreviewer } from "./ImagesPreviewer";

export const ImagesPresenter: FC<IImagesPresenterProps> = ({
    images
}) => {
    const [currentIndexImage, setCurrentIndexImage] = useState(0)


    return (
        <div
            className={`
                w-full  h-full
                flex flex-col
                items-center justify-center
                overflow-hidden
                relative
                gap-4    
            `}
        >
            <div
                className={`
                    w-full  h-96
                    flex flex-col
                    justify-center items-center
                    relative
                    `}
            >
                <img
                    alt="image-product"
                    src={images[currentIndexImage]}
                    className={`
                     h-72 w-4/5
                    object-contain
                    cursor-zoom-in                    
                `}
                />
                <img
                    alt="image-product"
                    src={images[currentIndexImage]}
                    className={`
                    w-full h-full
                    absolute top-0 left-0
                    object-cover
                    blur-sm brightness-50
                    -z-1                   
                `}
                />
            </div>
            <ImagePreviewer
                setCurrentIndexImage={setCurrentIndexImage}
                images={images}
            />
        </div>
    )
}