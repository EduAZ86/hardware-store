import React from "react";

type TOptionCategory = {
    value: string,
    title: string;
    id: string;
    disabled: boolean;
}


export interface ISelectCategoryProps extends Pick<React.SelectHTMLAttributes<HTMLSelectElement>, "title"> {
    options: TOptionCategory[]
    placeholder: string;
}

export interface IOptionCategoryProps extends Pick<React.OptionHTMLAttributes<HTMLOptionElement>,"value">{
    label:string,

}