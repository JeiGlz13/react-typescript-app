import { ReactElement } from "react";
import { PropsInterface } from "../components/ProductCard";
import { ButtonsPropsInterface } from '../components/ProductButtons';
import React from 'react';


export interface ProductInterface {
    id: string,
    title: string,
    desc: string,
    img?: string
}

export interface TitleInterface {
    title?: string,
    desc?: string,
    classNameTitle?: string,
    classNameDesc?: string,
    styleTitle?: React.CSSProperties,
    styleDesc?: React.CSSProperties
}

export interface ProductImageInterface {
    img?: string,
    className?: string,
    style?: React.CSSProperties
}

export interface ProductContextInterface {
    counter: number,
    increaseBy: (value: number)=> void,
    product: ProductInterface
}

export interface ProductHOCInterface {
        ({ children, product }: PropsInterface): JSX.Element;
        Title:   ({ title, desc, classNameDesc, classNameTitle, styleTitle, styleDesc }: TitleInterface) => JSX.Element;
        Image:   ({ img, className, style }: ProductImageInterface) => JSX.Element;
        Buttons: ({className, style}: ButtonsPropsInterface) => JSX.Element;
    }
