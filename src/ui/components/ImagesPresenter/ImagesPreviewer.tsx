import { FC } from "react";
import { IImagePreviewerProps } from "./types";

export const ImagePreviewer: FC<IImagePreviewerProps> = ({
    images,
    setCurrentIndexImage
}) => {
    return (
        <div
            className={`
                w-full h-1/4
                grid grid-cols-5 gap-1
                justify-items-center
                items-center
                relative
                `}
        >
            {images.map((image, index) => {
                return (
                    <img
                        onMouseEnter={() => setCurrentIndexImage(index)}
                        key={`image-${image}-${index}`}
                        src={image}
                        alt={`image-${image}-${index}`}
                        className={`
                            h-14
                            object-contain
                            cursor-pointer
                        `}
                    />
                )
            })}
        </div>
    )
}