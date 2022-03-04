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
    product: ProductInterface,
    maxCount?: number
}

export interface ProductHOCInterface {
        ({ children, product }: PropsInterface): JSX.Element;
        Title:   ({ title, desc, classNameDesc, classNameTitle, styleTitle, styleDesc }: TitleInterface) => JSX.Element;
        Image:   ({ img, className, style }: ProductImageInterface) => JSX.Element;
        Buttons: ({className, style, styleButtons, styleDiv}: ButtonsPropsInterface) => JSX.Element;
    }

export interface onChangeArgsInterface {
    product: ProductInterface,
    count: number
}

export interface ProductInCartInterface extends ProductInterface{
    count: number
  }

  export interface InitialValuesInterface {
      count?: number,
      maxCount?: number,
  }

  export interface ProductCardHandlersInterface {
      count: number,
      isMaxCountReached: boolean,
      maxCount?: number,
      product: ProductInterface,

      increaseBy: (value: number) => void,
      reset: () => void;
  }