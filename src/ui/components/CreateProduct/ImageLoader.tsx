import { FC } from "react";
import { ImagesInput } from "./constants";
import { InputField } from "../common";
import { IImageLoarerProps } from "./types";

export const ImageLoader: FC<IImageLoarerProps> = ({
    register,
    watch,
    errors
}) => {
    return (
        <div
            className={`
            w-full h-fit
            max-h-96
            min-w-52
            max-w-96
            flex flex-col 
            relative
            overflow-y-scroll            
            gap-1
        `}
        >
            <h2
                className={`
                  text-light-text dark:text-dark-text font-semibold
                  text-sm  
                `}
            >
                Image Loader
            </h2>
            <ol
                className="
                w-full h-full flex flex-row text-xs "
            >
                {
                    ImagesInput.map((input, index) => {
                        return (
                            <li
                                key={`image-${input}-${index}`}
                            >

                            </li>

                        )
                    })
                }
            </ol>
            {ImagesInput.map((image, index) => (
                <div
                    key={`image-${image}`}
                    className="flex flex-row gap-1 items-end"
                >

                    <InputField
                        key={`image-${image}`}                    
                        disabled={false}
                        id={`image-${image}`}
                        name={`image-${image}`}
                        placeholder={`url of image-${image}`}
                        type="url"
                        register={register}
                        errors={errors}
                        requiredMessage={`Product image-${image} is required`}
                    />
                    <img
                        className=" h-12 object-cover mb-1"
                        src={watch(`image-${image}`) ? watch(`image-${image}`) : "https://via.placeholder.com/150?text=Product"}
                        alt={`image-${image}`}
                    />
                </div>
            ))}

        </div>
    )
}