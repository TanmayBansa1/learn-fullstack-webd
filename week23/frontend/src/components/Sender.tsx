import { useEffect, useState } from "react"

const Sender = () => {

    const [socket, setSocket] = useState<WebSocket | null>(null)
    useEffect((()=>{
        const socket = new WebSocket('ws://localhost:8000')
        setSocket(socket)
        socket.onopen=()=>{
            socket.send(JSON.stringify({
                type: "identify-as-sender"
            }))
        }
    }),[])
    const sendVideo = async ()=>{
        if(!socket){
            return;
        }
        const pc = new RTCPeerConnection();
        pc.onnegotiationneeded = async ()=>{
            console.log("negotiation needed");
            const offer = await pc.createOffer();
            await pc.setLocalDescription(offer);
            socket?.send(JSON.stringify({
                type: "create-offer",
                sdp: pc.localDescription
            }))
        }
        socket.onmessage=async (data)=>{
            const message = JSON.parse(data.data);
            if(message.type === 'answer'){
                await pc.setRemoteDescription(message.sdp)
            }
            else if(message.type === 'ice-candidate'){
                await pc.addIceCandidate(message.candidate)
            }

        }
        pc.onicecandidate= (event)=>{
            if(!event.candidate){
                return;
            }
            socket?.send(JSON.stringify({
                type: "add-ice-candidate",
                candidate: event.candidate
            }))
        }
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        pc.addTrack(stream.getVideoTracks()[0]);
    }

  return (
    <div>
        <button onClick={sendVideo}>Send video</button>
    </div>
  )
}

export default Sender