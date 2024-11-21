import { useEffect, useRef, useState } from "react";

const RefSample = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [state, setState] = useState("A");

    useEffect(() => {
        setState("B");
        return () => {
            console.log(state);
        }
    },[]);

    // div element 속성의 textContent는
    // 해당 노드가 가지고 있는 텍스트 값을 모두 가져옴. 
    console.log(ref.current?.textContent);
    return (
        <>
            <div ref={state === "A" ? ref : null}>A</div>
            <div ref={state === "B" ? ref : null}>B</div>
        </>
    );
}

export default RefSample;

// 1. undefined
// 컴포넌트가 생성되면서 ref에는 null이 할당된다.
// useEffect는 DOM이 그려진 다음 실행되므로
// 아래 div에는 ref가 할당되지 않는다.
// 그래서 undefined가 출력된다.
// 2. A
// DOM이 그려진 후 useEffect가 실행돼서 state의 값은 B로 변경되지만
// state가 B로 바뀌었어도 ref는 state가 A일 때의 값을 기억하고 있어서
// state가 바뀌었더라도 A가 할당된다.
// DOM이 그려진 시점에는 ref는 A에 할당되어 있음.