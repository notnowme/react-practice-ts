import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const Debounce = () => {
    
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const debounceValue = useDebounce(search);

    // useEffect(() => {
    //     const getData = async() => {
    //         return await fetch(`https://restcountries.com/v3.1/name/${debounceValue}`).then(res => {
    //             if(!res.ok) {
    //                 return Promise.reject('No Data');
    //             }
    //             return res.json();
    //         }).then(list => {
    //             console.log(list[0].name.official);
    //             setData(list);
    //         }).catch(err => console.error(err));
    //     }
    //     if(debounceValue) getData();
    // },[debounceValue]);

    useEffect(() => {
        const getData = async() => {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${search}`);
                if(!res.ok) {
                    return 'No Data';
                }
                const result = await res.json();
                console.log(result);
                setData(result);
            } catch (err) {
                console.error('ERROR!');
            }
        }
        if(search) getData();
    },[search])
    
    return (
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} name="" id="" />
            <hr />
            {
                data.map((el: any, index: number) => (
                    <p key={index}>{el.name.common}</p>
                ))
            }
        </div>
    )
}

export default Debounce;