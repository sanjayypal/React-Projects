import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

const [counter,setCounter] = useState(10);
  const addValue = () =>{
    setCounter(counter+1);
  }
  const removeValue = () =>{
    setCounter(counter-1);
  }

  return (
    <>
     <h1> Chai Aur React</h1>
     <br />
     <h1>Counter Value : {counter} </h1>
     <button
      onClick={addValue}
     >Add Value</button>
     <button 
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
