import React, { useReducer } from "react";

const reducer = (state: any, action: React.ChangeEvent<HTMLInputElement>['target']) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

const useInputs = (init: any): [any, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [state, dispatch] = useReducer(reducer, init);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target);
    };
    return [state, onChange];
}

export default useInputs;