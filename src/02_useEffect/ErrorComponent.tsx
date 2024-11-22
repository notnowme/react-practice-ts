const ErrorComponent = ({error}:{error: Error | null}) => {
    return (
        <div>
            <h1>에러가 발생했습니다 {':('}</h1>
            <p>{error?.message}</p>
        </div>
    )
}

export default ErrorComponent;