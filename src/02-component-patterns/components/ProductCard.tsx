import { createContext, ReactElement } from 'react';
import { useProduct } from "../hooks/useProduct";

import { onChangeArgsInterface, ProductContextInterface, ProductInterface, InitialValuesInterface, ProductCardHandlersInterface } from '../interfaces/ProductInterfaces';
import React from 'react';


export interface PropsInterface {
    product: ProductInterface,
    //children?: ReactElement | ReactElement[] ,
    children: (args: ProductCardHandlersInterface) => JSX.Element,
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgsInterface) => void,
    value?: number,
    initialValues?: InitialValuesInterface
}

export const ProductContext = createContext({} as ProductContextInterface);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: PropsInterface) => {
    const {counter, increaseBy, maxCount, isMaxCountReached, reset} = useProduct({
        onChange,
        product,
        value,
        initialValues,
    });

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount,
    }} >
        <div className= {`mt-8 w-96 mx-2 md:p-4 p-2 bg-white rounded-3xl ${className}`} style ={style}  >
            {
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset
                })
            }
        </div>
    </Provider>
  )
}

