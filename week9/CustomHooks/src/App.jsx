
import './App.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios'

// function App(){

//   const [show,setShow] = useState(true);

//   useEffect(()=>{
//     setTimeout(()=>{
//       setShow(false)
//     },3*1000)
//   },[])
//   // const onShow = ()=>{
//   //   setTimeout(()=>{
//   //     setShow(false)
//   //   },3*1000)
//   // }
//   // onShow()
//   return <div>


//     {show ? <MyComponent></MyComponent>:<div></div>}
//     {/* {onShow} */}
//   </div>

// }
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("mounted")
//     return () => {
//       console.log("unmounted")
//       // Cleanup code (similar to componentWillUnmount)
//     };
//   }, []);

//   // Render UI
//   return <div>
//     hi from inside the component
//   </div>
// }


//data fetching hooks

function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loading,setLoading] = useState();
  useEffect(() => {
    let value = setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false)
      })
    },n*1000)

    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res => {
      setTodos(res.data.todos);
      setLoading(false)
    })

    return ()=>{
      clearInterval(value)
    }

  }, [n])


  return {todos, loading}
}

//usedeobunce
function useDebounce(inputvalue,n){

  const [value,setValue] = useState(inputvalue);
  console.log(value)
  useEffect(()=>{
    const id = setTimeout(()=>{
      setValue(inputvalue)
      console.log(value)
    },n)

    return ()=>{
      clearTimeout(id);
    }
  },[inputvalue,n])

  return value;
}

//isonline
function useIsOnline(){

  const [online,setOnline] = useState(true);

  window.addEventListener('online',() => {
    console.log('Became online');
    setOnline(true);
  });
  window.addEventListener('offline',() => {
    console.log('Became online');
    setOnline(false);
  });
  
  return online;
}
function useInterval(func,n){

  useEffect(()=>{
    const value = setInterval(func,n*1000)

    return ()=>{
      clearInterval(value)
    }
  },[func,n]);

}

function App() {

  // const {todos,loading} = useTodos(3);

  // return (
  //   <>
  //     {loading? "Loading...":todos.map(todo => <Track todo={todo} />)}
  //   </>
  // )



  // const isOnline = useIsOnline();

  // return <div>
  //   {isOnline?"you are online": "offliune"}
  // </div>



  // const [count,setCount] = useState(0);

  // useInterval(()=>{
  //   setCount(count=>count+1)
  //   console.log(count)
  // },1);

  // return <div>
  //   Timer is {count}
  // </div>



  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>

    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
      />
    <div>{debouncedValue}</div>
      </div>
  );
}

//mouse pointer
const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};


//useInterval hook


function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App

