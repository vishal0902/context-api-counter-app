import { useContext, useState } from 'react'
import {CounterContext} from './contexts/CounterContext'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <div>
     <CounterContext.Provider value={{count, setCount}}>
      <Count></Count>
     </CounterContext.Provider>
    

    </div>
  )
}


function Count () {
  return (<>
    <CounterButton></CounterButton>
  </>)
}

const CounterRederer = () => {
  const {count} = useContext(CounterContext)
  return (<h1>{count}</h1>)
}

const CounterButton = () => {
  const {count, setCount} = useContext(CounterContext)
  
  return (<div style={{display:"flex"}}>
    <button style={{fontSize:'50px'}} onClick={()=>setCount(count-1)}>-</button>
    <CounterRederer></CounterRederer>
    <button style={{fontSize:'50px'}} onClick={()=>setCount(count+1)}>+</button>
  </div>)
}

export default App
