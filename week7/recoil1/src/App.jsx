import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
// import { CountContext } from './context'

function App() {

  //to make recoil work we need to wrap under RecoilRoot anything that uses any sort of Recoil logic
  return (
    <>

      <RecoilRoot>

          {/* <CountRenderer></CountRenderer>
          <Buttons  ></Buttons>
          <IsEven></IsEven> */}
        <Count ></Count>
      </RecoilRoot>
    </>
  )
}

//now the Count component doesnt rerender again and again 
function Count() {

  return <div>



    <CountRenderer></CountRenderer>
    <Buttons  ></Buttons>
    <IsEven></IsEven>

  </div>

}

//only the components that actually use the atoms/state require them so only they will rerender
function CountRenderer() {

  //only needs the count value not the setCount because it doesnt udate it
  const count = useRecoilValue(countAtom);
  return <div>

    {count}
    {/* <IsEven></IsEven> */}
  </div>
}

//suppose we need to render is even if a count is even we can do this 
function IsEven(){
  const even = useRecoilValue(evenSelector);

  
  return <div>
    {/* {count} */}
    { even? "It is even " : ""}
  </div>
}


//now even the Buttons component doesnt rerender because it doesnt need count and hence no rerenders
function Buttons() {

  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => setCount((count)=>(count + 1))}>Increment</button>
    <button onClick={() => setCount((count)=>(count - 1))}>Decrement</button>
  </div>
}

export default App
