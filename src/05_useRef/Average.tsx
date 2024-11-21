import { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers: number[]) => {
    console.log('계산 중...');
    if (numbers.length === 0) return 0;
    const sum = (a: number, b: number) => a+b;
    return numbers.reduce(sum);
}

const Average = () => {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeUseCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    },[]);

    const onInsertUseCallback = useCallback(() => {
        const inputNumber = parseInt(number);
       if(isNaN(inputNumber)) return;
       const nextList = list.concat(inputNumber);
       setList(nextList);
       setNumber('');
       if(!inputRef.current) return;
       inputRef.current.focus();
    }, [number, list]);

    const avg = useMemo(() => {
        return getAverage(list);
    }, [list]);
    return (
        <div>
            <input type="text" ref={inputRef} value={number} onChange={onChangeUseCallback}/>
            <button onClick={onInsertUseCallback} >등록</button>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                {/* <p>평균 값: </p> {getAverage(list)} */}
                <p>평균 값: </p> {avg}
            </div>
        </div>
    )
};

export default Average;