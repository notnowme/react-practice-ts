import { useCallback, useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
    console.log('계산 중...');
    if (numbers.length === 0) return 0;
    const sum = (a: number, b: number) => a+b;
    return numbers.reduce(sum, 0);
}

const Average = () => {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState('');

    const onChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    }

    // 컴포넌트가 처음 생성될 때만 함수를 생성
    // const onChangeUseCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //     setNumber(e.target.value);
    // },[]);

    const onInsert = () => {
       const inputNumber = parseInt(number);
       if(isNaN(inputNumber)) return;
       const nextList = list.concat(inputNumber);
       setList(nextList);
       setNumber('');
    }

    // number 혹은 list가 변경되었을 때만 함수 생성
    //
    // []로 했을 경우 처음 생성됐을 상황을 기억하기 때문에
    // number나, list는 0 그리고 []이 된다.
    // 그래서 의존성 배열에 상태 값을 넣어줘야 한다.
    // const onInsertUseCallback = useCallback(() => {
    //     const inputNumber = parseInt(number);
    //    if(isNaN(inputNumber)) return;
    //    const nextList = list.concat(inputNumber);
    //    setList(nextList);
    //    setNumber('');
    // }, [number, list]);

    const avg = useMemo(() => {
        return getAverage(list);
    }, [list]);
    return (
        <div>
            <input type="text" value={number} onChange={onChnage} onKeyDown={(e) => {
                if(e.key === 'Enter') {
                    onInsert();
                }
            }}/>
            <button onClick={onInsert} >등록</button>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                <p>평균 값: </p> {getAverage(list)}
                {/* <p>평균 값: </p> {avg} */}
            </div>
        </div>
    )
};

export default Average;