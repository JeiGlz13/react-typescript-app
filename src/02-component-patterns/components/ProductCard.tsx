import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";

import { ProductContextInterface, PropsInterface } from '../interfaces/ProductInterfaces';

import { ProductButtons, ProductImage, ProductTitle } from "../components";

export const ProductContext = createContext({} as ProductContextInterface);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: PropsInterface) => {
    const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }} >
        <div className="mt-8 w-96 mx-2 md:p-4 p-2 bg-white rounded-3xl " >
            {
                children
            }
        </div>
    </Provider>
  )
}

