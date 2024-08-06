import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

// 1    why we cant return two siblings

// function App() {
//   const [title, setTitle] = useState("")


//   function reqHandler() {
//     setTitle("toString('a')" + Math.random());
//   }
//   return (

//     //this creates a parent div and renders two children for it
//     // <div>
//     //   <Header title = {"hi am Tanmay Bansal"}></Header>
//     //   <Header title = {"hi am lala land"}></Header>
//     // </div>

//     //this renders  siblings directly without a top level parent
//     //sort of fragmentation

//     <>
//       <button onClick={reqHandler}>Click here to change the title buddy </button>
//       <p></p>
//       <Header title={title}></Header>
//       <br></br>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>
//       <Header title="hi am lala land"></Header>

//     </>

//     //or simply just <> </>

//     //this is rerendering everything

//   )
// }

// 2 how to minimize rerenders

// function App(){

//   return <div>
//     <HeaderwithButton ></HeaderwithButton>
//     <Header title = "hi I am a static heading"></Header>
//     <Header title = "hi I am a static heading"></Header>
//     <Header title = "hi I am a static heading"></Header>
//     <Header title = "hi I am a static heading"></Header>
//     <Header title = "hi I am a static heading"></Header>
//   </div>
// }
// function HeaderwithButton(){

//   //only rerenders the state changing components
//   ///so it is the best practise to put the state variables at the LCA
//   const [title,setTitle] = useState("hi i am dynamic and I change like this");

//   function reqHandler(){
//     setTitle("hi i am dynamic and I change like this " + Math.random());
//   }
//   return <div>
//     <button onClick={reqHandler}> Update Title</button>
//     <p></p>
//     {title}
//   </div>
// }

// function Header({title}){

//   return <div>
//     {title}
//   </div>
// }

//or we can use React.memo so that we can memoise the components
// const Header = React.memo(function Header({ title }) {
//   return <div>
//     {title}
//   </div>
// })



//   3   understanding keys

// let counter = 4;
// function App(){

//   const [todos,setTodos] = useState([{
//     title: "go to the gym",
//     description: "at 9 am",
//     id: 1
//   },{

//     title: "go to the gym",
//     description: "at 9 am",
//     id: 2
//   },{
//     title: "go to the gym",
//     description: "at 9 am",
//     id: 3

//   }]);

//   function addtodo(){
//     setTodos([...todos,{
//       id: counter++,
//       title: "lmaaooo negro",
//       description: "dont laugh my neighbour"
//     }])

//   }
//   return <div>
//     <button onClick={addtodo}>Add todo</button>
//     {todos.map((todo)=>{
//       //adding keys
//       return <Todo key={todo.id} title = {todo.title} description={todo.description}></Todo>
//     })}
//   </div>




// }

// const Todo = React.memo(({title,description})=>{
//     return <div>
//       title {title}
//       description {description}
//     </div>
// })


// 4 wrapper components


// function App() {

//   const [card, setCard] = useState("");
//   return <div>
//     <div>
//       <Wrapper innerComponent={<TextComponent></TextComponent>}></Wrapper>
//       {/* or */}
//       <Wrapper>
//         <Wrapper>

//           hi i am a child
//         </Wrapper>
//       </Wrapper>
//     </div>
//   </div>

// }

// function TextComponent() {
//   return <div>
//     hi there
//   </div>
// }

// function Wrapper({ children, innerComponent }) {

//   return <div style={{ border: "2px solid white", height: "200px", width: "300px", padding: "20px" }}>
//     {children}
//     {innerComponent}
//   </div>


// }


// 5 useEffect hook -  help in performing side effects

//side effects - 1) setInterval || setTimeout
              // 2) fetch
              // 3) manual dom updation
function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const final = await res.json();
        setTodos(final.todos);
      })

    }, 10 * 1000)
  }, [])

  return <div>
    {todos.map((todo)=>{
      return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      
    })}
  </div>

}

const Todo = React.memo(({title,description})=>{

  return <div>
    <h3>{title}</h3>
    <h5>{description}</h5>
  </div>

})

export default App
