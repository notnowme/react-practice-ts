import { CounterCompound } from '@/compound/Counter'
import CounterNormal from '@/compound/CounterNormal'

const Index = () => {
    return (
        <>
          <CounterCompound initValue={0} maxNum={100} minNum={0}>
            <CounterCompound.Title>
              타이틀
            </CounterCompound.Title>
            <CounterCompound.Button type='INCREMENT'>
              ++
            </CounterCompound.Button>
            <CounterCompound.Button type='DECREMENT'>
              --
            </CounterCompound.Button>
            <CounterCompound.Status />
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

export default Index;