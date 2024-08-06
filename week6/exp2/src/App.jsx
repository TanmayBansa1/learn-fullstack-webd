import React ,{ useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   const [todos,setTodos] = useState([]);

//   useEffect(()=>{
//     // setInterval(()=>{

//       //fetch syntax
//       // fetch("https://sum-server.100xdevs.com/todos").then(async (res)=>{
//       //   const final = await res.json();
//       //   setTodos(final.todos);
//       // })

//       //axios syntax
//       axios.get("https://sum-server.100xdevs.com/todos").then((res)=>{
//         // const final = await res.json();
//         setTodos(res.data.todos);
//       })
//     // })

//   },[])

//   return (
//     <>
//     {todos.map((todo)=>{

//       return <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>

//     })}
//     </>
//   )
// }

// const Todo = React.memo(({title,description})=>{

//   return <div>
//     {title}
//     {description}
//   </div>
// })



// using id for fetching a Todo

// function App(){

//   // const [id,]

//   return <div>
//     <Todo id={1}></Todo>
//   </div>
// }

//create buttons to render the specific todo
// function App(){

//   const [id, setId] = useState(1);

//   return <div>
//     <button   onClick={function(){
//       setId(1)
//     }}>1</button>
//     <button  onClick={function(){
//       setId(2)
//     }}>2</button>
//     <button  onClick={function(){
//       setId(3)
//     }}>3</button>
//     <button  onClick={function(){
//       setId(4)
//     }}>4</button>

//     <Todo id={id}></Todo>
//   </div>
// }

// function Todo({id}){

//   const [todo,setTodo] = useState({});

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id).then((res)=>{
//       setTodo(res.data.todo);
//     })
//   },[id])

//   return <div>
//     {todo.title}
//     <p></p>
//     {todo.description}
//   </div>
// }



//create a counter a long with a sum  of n numbers

function App(){
  const [count, setCount] = useState(0);

  const [n,setN] = useState(0);

  //using useMemo to avoid rerendering the sum when the counter button is clicked
  const ans = useMemo(()=>{
    return n*(n+1)/2;
  },[n]);
  return <div>
    <input onChange={(e)=>{
      // console.log(e.target.value);
      const num = Number(e.target.value);
      setN(num);

      //normal way to compute n but causes extra rerenders

      // const ans = Number(num*(num+1)/2)



      // const ans = useMemo(()=>{
      //   ans = (num)*(num+1)/2;
      //   console.log(ans);
      // },[num])   doesnt work because hoooks can be called only innsie the component
      
      // setN(ans);

    }} placeholder='enter the number n'></input>
    {console.log(n)}
    <p>Sum is {ans}</p>
    <button onClick={()=>setCount(count+1)}>Counter {count} </button>
  </div>
}

export default App
