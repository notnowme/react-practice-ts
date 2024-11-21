import { useState, useTransition } from "react";

const TransitionSample = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState<number[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            const newArr: number[] = new Array(10000);
            for(let i=0; i < newArr.length; i++) {
                newArr[i] = parseInt(e.target.value) * i;
            }
            console.log(newArr);
            setCount(newArr);
        })
    }

    return (
        <>
        <input type="text" onChange={handleChange} />
        {
            isPending ? <div>loading...</div> :
            <div>
                <br />
                {
                    count.map((el, index) => (
                        <span key={index}>{el}, </span>
                    ))
                }
            </div>  
        }
        </>
    );
};

export default TransitionSample;