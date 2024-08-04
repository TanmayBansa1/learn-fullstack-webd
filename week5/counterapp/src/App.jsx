//hook
import { useState } from 'react'

import './App.css'


function App() {
  // const [count, setCount] = useState(15);

  // return (

  //     <div >
  //       <Custom count= {count} setCount ={setCount}></Custom>
  //     </div>

  // )
  const [todos, setTodos] = useState([{
    title: "Take care of this baby",
    description: "ki this baby's name is priyu",
    completed: "do it everyday"
  },{
    title: "Study DSA",
    description: "roz pdhliya kr",
    completed: "false"
  }]);
  function reqhandler(){
    setTodos([...todos,{
      title: "random",
      description: "randomly"
    }])
  }

  return(
    <div>
      <button onClick={reqhandler}> Add a new Todo</button>
      {
        todos.map((todo) =>{
          
          return <Custom title={todo.title} description={todo.description}></Custom>
        })
      }
    </div>
  )
}

//creating a component
function Custom(props){
  // function reqHandler(){
  //   props.setCount(props.count + 1);
  // }

  // return(
  //   <button onClick={reqHandler}> Counter {props.count}</button>
  // )
  return(
    <div>
    <h3>{props.title}</h3>
    <h3>{props.description}</h3>
  </div>
  )

}


export default App
