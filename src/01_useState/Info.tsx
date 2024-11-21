import { useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value);
    }
    
    return (
        <div>
            <div>
                <input type="text" value ={name} onChange={onChangeName}/><br />
                <b>이름: </b>{name}
            </div>
            <br />
            <div>
                <input type="text" value ={nickName} onChange={onChangeNickName}/><br />
                <b>닉네임: </b>{nickName}
            </div>
        </div>
    );
};

export default Info;