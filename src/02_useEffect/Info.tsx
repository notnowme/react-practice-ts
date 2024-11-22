import { useEffect, useState } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name, nickName,
        });
    });

    useEffect(() => {
        // 보통 여기에서 서버에서 데이터를 가져오거나
        // 이벤트를 등록합니다.
        console.log('마운트될 때만 실행됩니다.');
    },[]);

    useEffect(() => {
        console.log('이름이 변할 때만 실행됩니다.');
        console.log(name);
    },[name]);

    useEffect(() => {
        return () => {
            console.log('언마운트 혹은 업데이트 될 때 매번 실행됩니다.');
        }
    });

    useEffect(() => {
        return () => {
            // 등록돼 있던 이벤트를 해제할 때 주로 많이 사용됩니다.
            console.log('언마운트될 때 한 번 실행됩니다.');
        }
    },[]);

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