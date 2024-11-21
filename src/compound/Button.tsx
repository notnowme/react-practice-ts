import { useCounter } from "./Counter";

interface Props {
    children: React.ReactNode;
    type: 'INCREMENT' | 'DECREMENT'
}
const Button = ({children, type}: Props) => {
    const { increment, decrement } = useCounter();

    return (
        <button onClick={type === 'INCREMENT' ? increment : decrement}>
            {children}
        </button>
    );
}

export default Button;