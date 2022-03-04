import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import React from 'react';

export interface ButtonsPropsInterface {
    className?: string,
    style?: React.CSSProperties,
    styleButtons?: React.CSSProperties,
    styleDiv?: React.CSSProperties
}

export const ProductButtons = ({className, style, styleButtons, styleDiv}: ButtonsPropsInterface): JSX.Element =>{
    
    const {counter, increaseBy, maxCount} = useContext(ProductContext);

    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    

    return (
        <div className="w-full flex justify-around items-center flex-row flex-wrap mt-4 md:mt-5 px-8 " style = {style}>
                <button onClick={()=>increaseBy(-1)}
                 type="button" className="w-full md:w-2/12 border border-gray-800 text-3xl font-medium leading-none uppercase py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-transparent hover:text-gray-800 transition-all duration-200 text-white"
                 style={styleButtons}>
                    -
                </button>

                <h1 className={`mx-1 text-4xl font-Poppins font-bold text-gray-700 ${className}
                ${isMaxReached()&&'mr-24'}  `}
                style = {styleDiv}   >
                    {counter}
                </h1>
                
                <button onClick={()=>increaseBy(1)}
                 type="button" className={`w-full md:w-2/12 border border-gray-800 text-3xl font-medium leading-none text-gray-800  uppercase py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 
                 ${(isMaxReached())&&'hidden'} `}
                 style={styleButtons}>
                    +
                </button>
            </div>
    )
}