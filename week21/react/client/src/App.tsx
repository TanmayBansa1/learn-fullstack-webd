import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Turnstile from 'react-turnstile'
function App() {
  const [token, setToken] = useState("");

  return (
    <>
    <input placeholder='otp'></input>
    <br>
    </br>
    <input placeholder='new password'></input>
    <br></br>
    <button onClick={async()=>{
      await axios.post('http://localhost:3000/reset-password', {
        email: "tanmaybansal.20@gmail.com",
        otp: '',
        newPassword: 'asdfasdfsadfasd',
        token: token
      })
    }}>Update Password</button>
    <Turnstile sitekey="0x4AAAAAABAd43cFVqBki2t0" onSuccess={
      (token)=>{
        setToken(token);
      }
    }></Turnstile>
    </>
  )
}

export default App
