import React from "react";


export interface ISearchBarProps {

}

export interface ISearchButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {

}

export interface IInputSearchProps extends Pick<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {

}


