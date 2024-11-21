import { useEffect, useState } from "react"

const useDebounce = (value: any, delay = 500) => {
    const [state, setState] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setState(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    },[value, delay]);

    return state;
}

export default useDebounce;