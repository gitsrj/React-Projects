import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sahil",
    age: 21
  }

  let myArr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="srj"  description="This is for SRJ" btnText="Click"/>
      <Card username="Sahil" description="This is for Sahil" />
      
    </>
  )
}

export default App
