import { useEffect, useRef, useState } from "react"

const Reciever = () => {
    const [pc, setPc] = useState<RTCPeerConnection | null>(null)
    const [videoStream, setVideoStream] = useState<MediaStream | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePlayVideo = () => {
        if (videoRef.current && videoStream) {
            videoRef.current.srcObject = videoStream;
            videoRef.current.play().catch(error => {
                console.error("Error playing video:", error);
            });
        }
    }

    useEffect(() => {
        // Create video element once
        const video = document.createElement('video');
        video.style.width = '300px';
        video.controls = true; // Add controls for user interaction
        document.body.appendChild(video);
        videoRef.current = video;

        const socket = new WebSocket('ws://localhost:8000')
        socket.onopen = () => {
            socket.send(JSON.stringify({
                type: "identify-as-reciever"
            }))
        }

        socket.onmessage = async (data) => {
            try {
                const message = JSON.parse(data.data);

                if(message.type == "offer"){
                    const pc = new RTCPeerConnection();
                    setPc(pc);
                    
                    pc.ontrack = (event) => { 
                        console.log("track added");
                        const stream = new MediaStream([event.track]);
                        setVideoStream(stream);
                    }
                    
                    await pc.setRemoteDescription(message.sdp);
                    const answer = await pc.createAnswer();
                    await pc.setLocalDescription(answer);
                    
                    socket?.send(JSON.stringify({
                        type: "create-answer",
                        sdp: pc.localDescription
                    }))
                    
                    pc.onicecandidate = (event) => {
                        if (!event.candidate) {
                            return;
                        }
                        socket?.send(JSON.stringify({
                            type: "add-ice-candidate",
                            candidate: event.candidate
                        }))
                    }
                }
                else if(message.type === 'ice-candidate'){
                    await pc?.addIceCandidate(message.candidate)
                }
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        }

        // Cleanup function
        return () => {
            if (videoRef.current) {
                document.body.removeChild(videoRef.current);
            }
        }
    }, [])

    return (
        <div>
            <h2>Receiver</h2>
            {videoStream && (
                <button onClick={handlePlayVideo}>
                    Play Video
                </button>
            )}
        </div>
    )
}

export default Reciever;