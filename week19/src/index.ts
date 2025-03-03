import http from 'http'
import WebSocket, { WebSocketServer } from 'ws'
const server = http.createServer(function (req, res) {
    console.log(new Date() + ' ' + 'Request received from' + ' ' + req.url)
    res.end('hi from the server')
})

const wss = new WebSocketServer({ server })
let users = 0;
wss.on('connection', function (socket) {
    socket.on('error', (err) => console.error(err))
    socket.on('message', function (message, isBinary) {
        wss.clients.forEach(function (client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message, { binary: isBinary });
            }
        })
    })
    console.log(++users + ' users connected')
    socket.send('hi from the server')
})

server.listen(8080, function () {
    console.log(new Date() + ' ' + 'Server is listening on port 8080')
})