import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import React from 'react'
// import  Dashboard  from '../components/Dashboard'
// import  Landing  from '../components/Landing'

//implementing lazy loading
const Dashboard = React.lazy(()=> import("../components/Dashboard"))
const Landing = React.lazy(()=>import("../components/Landing"))

//client side routing
function App() {

  
  //1st approach which doesnt solve our problem
  // return (

  //   //this isnt really client side routing because its causing hard reloads
  //   <>
  //       <div style={{backgroundColor: "blue"}}>
  //         Hi this is the topbar
  //         <button onClick={()=>{
  //           window.location.href = "/";
  //         }}>Landing</button>
  //         <button onClick={()=>{
  //           window.location.href = "/dashboard";
  //         }}>Dashboard</button>
          
  //         </div>
  //       <BrowserRouter>
  //           <Routes>
  //             <Route path="/dashboard" element={<Dashboard/>}></Route>
  //             <Route path="/" element={<Landing/>}></Route>  
  //           </Routes>
        
  //       </BrowserRouter>     
  //   </>
  // )



  //2 approach using useNavigate hook

  
  return <div>
        
        
        <BrowserRouter>

            <TopBar></TopBar>
            {/* //to implement lazy loading we need a Suspense component from react because react does not know what to do when the components are getting lazily loaded sp Suspense provides it with a page to render when loading */}
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/" element={<Landing/>}></Route>
            </Routes>
            </Suspense>
        
        </BrowserRouter>  
  </div>
}

function TopBar(){

  //useNavigate can only be used inseide the BrowserRouter component
    const navigate = useNavigate();
  return <div>
     <div style={{backgroundColor: "blue"}}>
          Hi this is the topbar
           <button onClick={()=>{
            navigate("/");
          }}>Landing</button>
          <button onClick={()=>{
            navigate("/dashboard");
          }}>Dashboard</button>
          
          </div>
    </div>
}

export default App
