import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'

async function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/mytodos").then(async function(res){
    const jsn = await res.json();
    setTodos(jsn.todos);
  })
  // const response = await fetch("http://localhost:3000/mytodos")
  // console.log("hello");
  // const finalSet = await response.json();
  // setTodos(finalSet.todos);
  

  return (
    <>
      <div>
        <CreateTodo />  
        <Todos todos= {todos} ></Todos>
      </div>
    </>
  )
}

export default App
