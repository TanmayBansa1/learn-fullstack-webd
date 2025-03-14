"use strict";
////// 1)
//basic state management
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
// export const games: Game[] = [];
///// 2)
//create a class so as to expose functions that can be used by the client
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gameId, move) {
        console.log("Adding", move, "to game", gameId);
        const game = this.games.find((game) => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayername: "white",
            blackPlayername: "black",
            moves: []
        };
        this.games.push(game);
    }
}
exports.GameManager = GameManager;
