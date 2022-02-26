import { ReactElement } from "react";

export interface PropsInterface {
    product: ProductInterface,
    children?: ReactElement | ReactElement[] 
}

export interface ProductInterface {
    id: string,
    title: string,
    desc: string,
    img?: string
}

export interface TitleInterface {
    title?: string,
    desc?: string
}

export interface ProductContextInterface {
    counter: number,
    increaseBy: (value: number)=> void,
    product: ProductInterface
}

export interface ProductHOCInterface {
        ({ children, product }: PropsInterface): JSX.Element;
        Title: ({ title, desc }: TitleInterface) => JSX.Element;
        Image: ({ img }: {
            img?: string | undefined;
        }) => JSX.Element;
        Buttons: () => JSX.Element;
    }
