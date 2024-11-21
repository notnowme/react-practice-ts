import { useCounter } from "./Counter"

const CounterStatus = () => {
    const {counter} = useCounter();
    return (
        <p>{counter}</p>
    )
}

export default CounterStatus;