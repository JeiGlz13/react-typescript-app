import { createContext, ReactElement } from 'react';
import { useProduct } from "../hooks/useProduct";

import { ProductContextInterface, ProductInterface } from '../interfaces/ProductInterfaces';
import React from 'react';


export interface PropsInterface {
    product: ProductInterface,
    children?: ReactElement | ReactElement[] ,
    className?: string,
    style?: React.CSSProperties,
}

export const ProductContext = createContext({} as ProductContextInterface);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style}: PropsInterface) => {
    const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }} >
        <div className= {`mt-8 w-96 mx-2 md:p-4 p-2 bg-white rounded-3xl ${className}`} style ={style}  >
            {
                children
            }
        </div>
    </Provider>
  )
}

