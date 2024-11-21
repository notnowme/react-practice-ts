import { useReducer } from "react";

interface Action {
    type: 'INCREMENT' | 'DECREMENT';
}

const reducer = (state: number, action: Action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error(`[ERROR] unknown action type - ${action.type}`);
        }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>
                + 1
            </button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>
                - 1
            </button>
        </div>
    );
}

export default Counter;