import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count count={count} setCount={setCount}></Count> */}

      {/* using cvontext api */}
      <CountContext.Provider value={{count,setCount}}>

        <Count ></Count>
      </CountContext.Provider>
    </>
  )
}
//this unnecessary passing down of setCount to Count just so Buttons can access it is called prop drilling 
//it does not affect performance but makes the code unreadable
//context API hellps us solve this 
function Count() {
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons  ></Buttons>

  </div>

}
//here basically Count doesnot use any state variable but it still rerenders thus context api doesnt provide any performance enhancement but just makes the code more readable
function CountRenderer(){
  const {count} = useContext(CountContext);
  return <div>
    
     {count}
  </div> 
}

function Buttons() {
 const { setCount} = useContext(CountContext);
  return <div>
    <button onClick={()=> setCount((count)=>count+1)}>Increment</button>
    <button onClick={()=> setCount((count)=>count-1)}>Decrement</button>
  </div>
}

export default App
