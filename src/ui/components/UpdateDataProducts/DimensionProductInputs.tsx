import { FC } from "react";
import { IDimensionProductInputsProps } from "./types";
import { InputField } from "../common";

export const DimensionProductInputs: FC<IDimensionProductInputsProps> = ({
    errors,
    register
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
                Product dimensions
            </h2>
            <InputField
                key={"length"}
                disabled={false}
                id="length"
                name="length"
                placeholder="Product length"
                type="number"
                register={register}
                errors={errors}
                requiredMessage="length product is required"
            />
            <InputField
                key={"width"}
                disabled={false}
                id="width"
                name="width"
                placeholder="Product width"
                type="number"
                register={register}
                errors={errors}
                requiredMessage="width product is required"
            />
            <InputField
                key={"height"}
                disabled={false}
                id="height"
                name="height"
                placeholder="Product height"
                type="number"
                register={register}
                errors={errors}
                requiredMessage="height product is required"
            />
            <InputField
                key={"weight"}
                disabled={false}
                id="weight"
                name="weight"
                placeholder="Product weight"
                type="number"
                register={register}
                errors={errors}
                requiredMessage="weight product is required"
            />
        </div>
    )
}