import { useReducer } from "react";

interface User {
    name: string,
    nickName: string,
}

const reducer = (state: User, action: React.ChangeEvent<HTMLInputElement>['target']) => {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickName: '',
    });

    const {name, nickName} = state;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target);
    }
    return (
        <div>
            <div>
                <input type="text" name='name' value ={name} onChange={onChange}/><br />
                <b>이름: </b>{name}
            </div>
            <br />
            <div>
                <input type="text" name='nickName' value ={nickName} onChange={onChange}/><br />
                <b>닉네임: </b>{nickName}
            </div>
        </div>
    );
};

export default Info;