import ErrorBoundary from '@/02_useEffect/ErrorBoundary'
import CounterUseReducer from '@/03_useReducer/Counter';
import InfoUseReducer from '@/03_useReducer/Info';
const Index = () => {
    return (
        <>
    <ErrorBoundary>
      <CounterUseReducer />
    </ErrorBoundary>
    {/* <InfoUseReducer /> */}
        </>
    )
}

export default Index;