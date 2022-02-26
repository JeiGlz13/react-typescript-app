import { type } from "os";
import { useState } from "react";

type CounterReturnType = {
    counter: number,
    increaseBy: (value: number)=>void
}

export const useProduct = ():CounterReturnType =>{
    const [counter, setCounter] = useState<number>(0);
    
    const increaseBy = (value: number):void =>{
            setCounter(prev => Math.max(prev + value, 0));
    }
    
    return {
        counter,
        increaseBy
    }
}
