import React, { createContext, useContext, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import CounterStatus from "./CounterStatus";

interface Props {
    children: React.ReactNode;
    initValue: number;
    minNum?: number;
    maxNum?: number;
}

const compositeContext = createContext({
    counter: 0,
    increment: () => {},
    decrement: () => {},
});

export const CounterCompound = ({children, initValue, minNum, maxNum}: Props) => {
    const [counter, setCounter] = useState(initValue);

    const increment = () => {
        setCounter(prev => {
            if(maxNum === undefined) {
                return prev + 1;
            } else {
                return prev < maxNum ? prev + 1 : prev;
            }
        })
    }

    const decrement = () => {
        setCounter(prev => {
            if(minNum === undefined) {
                return prev - 1;
            } else {
                return prev > minNum ? prev - 1 : prev;
            }
        })
    }

    return (
        <compositeContext.Provider value={{counter, increment, decrement }}>
            {children}
        </compositeContext.Provider>
    )
}

CounterCompound.Title = Title;
CounterCompound.Button = Button;
CounterCompound.Status = CounterStatus;

export const useCounter = () => useContext(compositeContext);