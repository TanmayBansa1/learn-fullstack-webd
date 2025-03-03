import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [latestMessage, setLatestMessage] = useState<string>('');
  useEffect(() =>{
    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      console.log('connected');
      ws.send('hi from the client');
      setSocket(ws);
    };
    ws.onmessage = (event) => {
      console.log(event);
      setLatestMessage(event.data);
    };
    return ()=>{
      ws.close();
    }
  }, [])

  return (
    <div>
      <input onChange={(e)=>{
        setMessages([...messages, e.target.value])
      }}></input>
      <button onClick={()=>{
        socket?.send(JSON.stringify(messages));
      }}>send</button>
      <div>{latestMessage}</div>
    </div>
  )

}

export default App
