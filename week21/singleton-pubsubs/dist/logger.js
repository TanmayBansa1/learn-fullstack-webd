"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = startLogger;
const index_1 = require("./index");
function startLogger() {
    setInterval(() => {
        console.log(index_1.gameManager.games);
    }, 5000);
}
