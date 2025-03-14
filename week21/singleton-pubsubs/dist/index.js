"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = void 0;
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
exports.gameManager = new store_1.GameManager();
setInterval(() => {
    exports.gameManager.addGame(Math.random().toString());
}, 5000);
//ws server
