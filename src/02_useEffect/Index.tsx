import { useState } from "react";
import InfoUseEffect from '@/02_useEffect/Info'
import LayoutEffect from '@/02_useEffect/LayoutEffect'

const Index = () => {
    const [view, setView] = useState(true);
    return (
        <>
            {view && <InfoUseEffect />}
            <button
                onClick={() => setView(prev => !prev)}>
                    {view ? '보기' : '숨기기'}
            </button>
            {/* <LayoutEffect /> */}
        </>
    )
}

export default Index;