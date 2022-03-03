import { useEffect, useRef, useState } from "react";
import { onChangeArgsInterface, ProductInterface } from '../interfaces/ProductInterfaces';

type CounterReturnType = {
    counter: number,
    increaseBy: (value: number)=>void
}

interface useProductArgsInterface {
    product: ProductInterface,
    onChange?: (args: onChangeArgsInterface) => void,
    value?: number
}

export const useProduct = ({onChange, product, value = 0}: useProductArgsInterface):CounterReturnType =>{
    const [counter, setCounter] = useState<number>(value);

    const isControlled = useRef(!!onChange)
    
    const increaseBy = (value: number):void =>{
        if (isControlled.current) {
            return onChange!({count:value, product})
        }


        const newValue = Math.max(counter + value, 0)

        setCounter(newValue);
            
        (onChange) && onChange({
            count: newValue,
            product
        });
    }

    useEffect(() => {
        setCounter(value);
    }, [value])
    
    
    return {
        counter,
        increaseBy
    }
}
