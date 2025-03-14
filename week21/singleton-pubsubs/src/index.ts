import { startLogger } from "./logger"
import { gameManager } from "./store"

startLogger();
setInterval(() => {
    gameManager.addGame(Math.random().toString());
}, 5000)


// create a ws server here to maintain a connection with the client