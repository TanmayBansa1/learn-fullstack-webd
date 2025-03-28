"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const ws_1 = __importStar(require("ws"));
const server = http_1.default.createServer(function (req, res) {
    console.log(new Date() + ' ' + 'Request received from' + ' ' + req.url);
    res.end('hi from the server');
});
const wss = new ws_1.WebSocketServer({ server });
let users = 0;
wss.on('connection', function (socket) {
    socket.on('error', (err) => console.error(err));
    socket.on('message', function (message, isBinary) {
        wss.clients.forEach(function (client) {
            if (client.readyState === ws_1.default.OPEN) {
                client.send(message, { binary: isBinary });
            }
        });
    });
    console.log(++users + ' users connected');
    socket.send('hi from the server');
});
server.listen(8080, function () {
    console.log(new Date() + ' ' + 'Server is listening on port 8080');
});
