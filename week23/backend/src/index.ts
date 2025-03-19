import { WebSocket, WebSocketServer } from "ws";

const wss=  new WebSocketServer({port: 8000});
let senderSocket: null | WebSocket = null;
let recieverSocket: null | WebSocket = null;
wss.on("connection", (ws) => {
    /**
     * Handle incoming message from client.
     * Messages are expected to be JSON objects with a "type" field.
     * The following types are supported:
     * - "identify-as-sender": Set the sender socket.
     * - "identify-as-reciever": Set the reciever socket.
     * - "create-offer": Send an offer to the reciever.
     * - "create-answer": Send an answer to the sender.
     * - "add-ice-candidate": Add an ice candidate to the offer or answer.
     */
    ws.on("message", (data) => {
        const message = JSON.parse(data.toString());
        // identify-as-sender
        if(message.type == "identify-as-sender"){
            console.log("sender set");
            senderSocket = ws;
        }
        // identify-as-reciever
        if(message.type == "identify-as-reciever"){
            console.log("reciever set");
            recieverSocket = ws;
        }
        //create offer
        if(message.type == "create-offer"){
            if(ws !== senderSocket){
                return;
            }
            recieverSocket?.send(JSON.stringify({
                type: "offer",
                sdp: message.sdp
            }))
            console.log("offer recieved");
        }
        //create answer
        if(message.type == "create-answer"){
            if(ws !== recieverSocket){
                return;
            }
            senderSocket?.send(JSON.stringify({
                type: "answer",
                sdp: message.sdp
            }))
            console.log("answer recieved");
        }
        //add ice candidates
        if(message.type == "add-ice-candidate"){
            if(ws !== senderSocket && ws !== recieverSocket){
                return;
            }
            console.log("ice candidate added");
            if(ws === senderSocket){
                recieverSocket?.send(JSON.stringify({
                    type: "ice-candidate",
                    candidate: message.candidate
                }))
            }else{
                senderSocket?.send(JSON.stringify({
                    type: "ice-candidate",
                    candidate: message.candidate
                }))
            }
        }
    })
})