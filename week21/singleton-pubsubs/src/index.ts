/////// 1)
//for the game, unuderstanding singleton pattern

// import { startLogger } from "./logger"
// import { gameManager } from "./store"

// startLogger();
// setInterval(() => {
//     gameManager.addGame(Math.random().toString());
// }, 5000)
// create a ws server here to maintain a connection with the client



/////////// 2)
//for the pubsub, understanding singleton pattern

import { pubsubManager } from "./pubsubmanager";

setInterval(() => {
    pubsubManager.userSubscribe(Math.random().toString(), "AAPL");
}, 5000)


setInterval(() => {
    pubsubManager.relay("AAPL", "100");
}, 5000)