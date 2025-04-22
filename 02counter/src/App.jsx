import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = ()=>{
      counter >= 20 ? setCounter(20) : setCounter(counter + 1);
  }

  const removeValue = ()=>{
      counter <= 0 ? setCounter(0) : setCounter(counter - 1);
  }

  return (
    <>
      <h1>React Series</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br /> <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
