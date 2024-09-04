import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
import 'axios'
import { networkAtom, totalnotificationSelector } from './store/atoms/atoms'
import axios from 'axios'

// function App() {

//   //this works fine but is hard coded to default values
//   const network = useRecoilValue(networkAtom);
//   const job = useRecoilValue(jobAtom);
//   const message = useRecoilValue(messageAtom);
//   const notification = useRecoilValue(notificationAtom);

//   const totalnoti = useRecoilValue(totalSelector);


//   return (
//     <>
//     <RecoilRoot>

//         <button>Home </button>
//         <button>My network {network}</button>
//         <button>Jobs {job}</button>
//         <button>Messaging {message}</button>
//         <button>Notifications {notification}</button>
//         <button>Me {totalnoti}</button>
//     </RecoilRoot>
//     </>
//   )
// }

function App(){

  const networkValues = useRecoilValue(networkAtom);
  const totalnotifications = useRecoilValue(totalnotificationSelector);

  // useEffect(()=>{
  //   // for(let i = 0; i<1000000; i++){}
  //   axios.get("https://sum-server.100xdevs.com/notifications")
  //   .then(res=> { setNetworkValues( res.data)} );
  // },[])
  //this isnt ideal because it renders twice and theres a flash before the backend returns a response
  //so what we do is define the atom a different way

  return <div>
    <button>Home </button>
         <button>My network {networkValues.network}</button>
         <button>Jobs {networkValues.jobs}</button>
         <button>Messaging {networkValues.messaging}</button>
         <button>Notifications {networkValues.notifications}</button>
         <button>Me {totalnotifications}</button>
  </div>
}

export default App
