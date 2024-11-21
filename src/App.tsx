import './App.css'
import CounterUseState from '@/01_useState/Counter'
import InfoUseState from '@/01_useState/Info'
import InfoUseEffect from '@/02_useEffect/Info'
import { useState } from 'react'
import LayoutEffect from '@/02_useEffect/LayoutEffect'
import CounterUseReducer from '@/03_useReducer/Counter';
import InfoUseReducer from '@/03_useReducer/Info';
import AverageUseMemoCallback from '@/04_useMemo/Average';
import AverageUseRef from '@/05_useRef/Average'
import RefSample from '@/05_useRef/RefSample'
import InfoCustom from '@/06_custom/Info'
import Debounce from '@/06_custom/Debounce'
import TransitionSample from '@/06_useTransition/Transition'
import SassComponent from '@/07_css/SassComponent'
import CSSModule from '@/07_css/CSSModule'
import StyledComponent from '@/07_css/StyledComponent'
import FlushSync from '@/01_useState/FlushSyncScroll'
import { ThemeContext } from './useContext/themeContext'
import Page from './useContext/Page'
import { CounterCompound } from './compound/Counter'
import CounterNormal from './compound/CounterNormal'
function App() {

  const [view, setView] = useState(true);

  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <>
    {/* useState */}
    {/* <CounterUseState /> */}
    {/* <InfoUseState /> */}
    {/* <FlushSync /> */}
    {/* useState */}

    {/* useEffect */}
    {/* {view && <InfoUseEffect />}
    <button onClick={() => setView(prev => !prev)}>{view ? '보기' : '숨기기'}</button> */}
    {/* <LayoutEffect /> */}
    {/* useEffect */}

    {/* useReducer */}
    {/* <CounterUseReducer /> */}
    {/* <InfoUseReducer /> */}
    {/* useReducer */}

    {/* useMemo */}
    {/* <AverageUseMemoCallback /> */}
    {/* useMemo */}

    {/* useRef */}
    {/* <AverageUseRef /> */}
    {/* <RefSample /> */}
    {/* useRef */}

    {/* custom hooks */}
    {/* <InfoCustom /> */}
    {/* <Debounce /> */}
    {/* custom hooks */}

    {/* useTransition */}
    {/* <TransitionSample /> */}
    {/* useTransition */}

    {/* CSS */}
    {/* <SassComponent /> */}
    {/* <CSSModule /> */}
    {/* <StyledComponent /> */}
    {/* CSS */}
    
    {/* <ThemeContext.Provider value={{isDark, setIsDark}}>
      <Page />
    </ThemeContext.Provider> */}

    <CounterCompound initValue={0} maxNum={100} minNum={0}>
      <CounterCompound.Button type='INCREMENT'>
        ++
      </CounterCompound.Button>
      <CounterCompound.Title>
        타이틀
      </CounterCompound.Title>
      <CounterCompound.Status />
      <CounterCompound.Button type='DECREMENT'>
        --
      </CounterCompound.Button>
    </CounterCompound>

    {/* <CounterNormal
      title='타이틀'
      initNumber={0}
      minNum={0}
      maxNum={100}
    /> */}
    </>
  )
}

export default App
