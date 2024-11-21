import { useState } from "react";

interface Props {
    title: string;
    initNumber: number;
    minNum: number;
    maxNum: number;
}
type Action = 'INCREMENT' | 'DECREMENT';

const CounterNormal = ({title, initNumber, minNum, maxNum}: Props) => {
    const [count, setCount] = useState(initNumber);

    const handleCount = (action: Action) => {
        if(action === 'INCREMENT') {
            setCount(prev => prev+1);
        } else {
            setCount(prev => prev-1);
        }
    }
    return (
        <div>
            <header>
                <h2>{title}</h2>
            </header>
            <p>{count}</p>
            <footer>
                <button onClick={() => handleCount('INCREMENT')}>++</button>
                <button onClick={() => handleCount('DECREMENT')}>--</button>
            </footer>
        </div>
    );
}

export default CounterNormal;