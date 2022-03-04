import { useEffect, useState, useRef } from 'react';
import { InitialValuesInterface, onChangeArgsInterface, ProductInterface } from '../interfaces/ProductInterfaces';

type CounterReturnType = {
    counter: number,
    increaseBy: (value: number)=>void,
    isMaxCountReached: boolean,
    maxCount?: number,
    reset: () =>void
}

interface useProductArgsInterface {
    product: ProductInterface,
    onChange?: (args: onChangeArgsInterface) => void,
    value?: number,
    initialValues?: InitialValuesInterface
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgsInterface):CounterReturnType =>{
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef<boolean>(false);

    const increaseBy = (value: number):void =>{

        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

            
        (onChange) && onChange({
            count: newValue,
            product
        });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        isMounted.current = true;     
    }, [])

    useEffect(() => {
        if (isMounted.current) return; 
        
        setCounter(value);
    }, [value]);

    
    
    
    return {
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount
    }
}
