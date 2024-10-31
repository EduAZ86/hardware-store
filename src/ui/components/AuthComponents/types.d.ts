import { FormHTMLAttributes } from "react";

export interface IAuthFormProps extends FormHTMLAttributes<HTMLFormElement> {

}

export interface ISingProps {
    text: string;
    linkText: string;
    href: string;
}

export interface ISingInProps {

}

export interface ISingUpProps {

}


export interface IAuthContainerProps extends Pick<IAuthFormProps,
    | "onSubmit"
    | "children"
> {
    title: string;
    name: string;
    textButton: string;
    linkButton: ISingProps ;
    disableSocialSignIn?: boolean;
}

export interface IForgotPasswordProps {

}