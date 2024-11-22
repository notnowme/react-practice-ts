interface Item {
    id: number;
    task: string;   
}

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const FlushSync = () => {
    const [todos, setTodos] = useState<Item[]>([
        {
            id: 1,
            task: 'JS'
        }
    ]);
    const [input, setInput] = useState('');
    const listRef = useRef<HTMLUListElement>(null);

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    },[]);

    const handleAdd = () => {
        flushSync(() => {
            setTodos(prev => {
                const lastEl = prev[prev.length-1];
                const newData: Item = {
                    id: lastEl.id +1,
                    task: input,
                };
                return [...prev, newData];
            });
        });
        // setTodos(prev => {
        //     const lastEl = prev[prev.length-1];
        //     const newData: Item = {
        //         id: lastEl.id +1,
        //         task: input,
        //     };
        //     return [...prev, newData];
        // });
        // setInput('');
        if(!listRef.current) return;
        listRef.current.scrollTop = listRef.current.scrollHeight;
    }
    return (
        <section>
            <h1>TODOS</h1>
            <ul ref={listRef}>
                {
                    todos.map(todo => (
                        <li key={todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
            <input
                type="text"
                placeholder="input text..."
                value={input}
                onChange={onChange}
            />
            <button onClick={handleAdd}>추가</button>
        </section>
    )
};

export default FlushSync;