import { useEffect, useLayoutEffect, useState } from "react";

const LayoutEffect = () => {
    console.log('App')
    
    const [state, setState] = useState(0)
    
    useEffect(() => {
        setState(state => state + 1)
    }, [])

    useEffect(() => {
        console.log('useEffect A')
        return () => {
            console.log('useEffect A cleanup')
        }
    }, [state])

    useEffect(() => {
        console.log('useEffect B')
        return () => {
            console.log('useEffect B cleanup')
        }
    }, [state])

    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        return () => {
            console.log('useLayoutEffect cleanup')
        }
    }, [state])

    return (
        <div>
            <h1>useLayoutEffect</h1>
        </div>
    )
};

export default LayoutEffect;

// 1. App 컴포넌트가 생성되면서 'App'이 출력됩니다.
// 2. 'useLayoutEffect'가 출력됩니다. => 렌더링 결과가 DOM에 반영되기 전에 실행되기 때문.
// 3. 'useEffect A'가 출력됩니다.
// 4. 'useEffect B'가 출력됩니다.
// useEffect는 DOM에 반영된 후 실행되기 때문.
// 5. setState 함수가 실행되어서 컴포넌트가 다시 렌더링됩니다.
// (이때, useLayoutEffect의 클린업 함수가 실행됩니다.)
// 6. 'App'이 출력됩니다.
// 7. 'useLayoutEffect cleanup'이 출력됩니다.
// 8. 'useLayoutEffect'가 출력됩니다.
// 9. 'useEffect A cleanup'이 출력됩니다.
// 10. 'useEffect B cleanup'이 출력됩니다.
// useEffect의 클린업 함수는 useLayoutEffect의 클린업 함수보다 나중에 실행됩니다.
// 11. 'useEffect A'가 출력됩니다.
// 12. 'useEffect B'가 출력됩니다.