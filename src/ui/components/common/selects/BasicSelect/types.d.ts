import React from "react";
import { TOption } from "../Select/types";




export interface IBasicSelectProps extends Pick<React.SelectHTMLAttributes<HTMLSelectElement>, "title" | "onChange"> {
    options: TOption[]
    placeholder: string;
}

export interface IBasicOptionProps extends Pick<React.OptionHTMLAttributes<HTMLOptionElement>, "value"> {
    label: string,

}