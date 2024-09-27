import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='bg-black rounded-md w-auto p-10'>
    <h1 className='text-3xl text-white font-bold'>Todo App</h1>
    <AddTodo/>
    <Todos/>
    </div>
  )
}

export default App
