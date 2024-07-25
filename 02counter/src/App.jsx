import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15) 
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    if (counter > 1) {
      setCounter(counter - 1)
    }else{
      setCounter(counter)
    }
  }
  return (
    <>
    <h1>React</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
