import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [value,setValue] = useState(10);
  // let value = 10;
  const increaseValue = () => {
    value++
    setValue(value)
  }

  const decreaseValue = () => {
    value--
    setValue(value)
  }

  return (
    <>
      <h2>Counter App</h2>
      <h3>Current Value : {value}</h3>
      <br />
      <button onClick={increaseValue}>Increase Value </button>
      
      <button onClick={decreaseValue}>Decrease Value </button>
    </>
  )
}

export default App
