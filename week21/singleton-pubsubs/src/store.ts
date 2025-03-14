////// 1)
//basic state management

// problems being no functionality to states 

interface Game{
    id: string,
    whitePlayername: string,
    blackPlayername: string,
    moves: string[]
}
// export const games: Game[] = [];




///// 2)
//create a class so as to expose functions that can be used by the client
//slightly better approach

// export class GameManager{
//     games: Game[] = [];
//     constructor(){
//         this.games = [];
//     }

//     addMove(gameId: string, move: string){
//         console.log("Adding", move, "to game", gameId);
//         const game = this.games.find((game) => game.id === gameId);
//         game?.moves.push(move);
//     }

//     addGame(gameId: string){
//         const game = {
//             id: gameId,
//             whitePlayername: "white",
//             blackPlayername: "black",
//             moves: []
//         }
//         this.games.push(game);
//     }
// }
// export const gameManager = new GameManager();





///// 3)
//singleton pattern approach
//best approach

export class GameManager{
    games: Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new GameManager();
        }
        return this.instance;
    }

    addMove(gameId: string, move: string){
        console.log("Adding", move, "to game", gameId);
        const game = this.games.find((game) => game.id === gameId);
        game?.moves.push(move);
    }

    addGame(gameId: string){
        const game = {
            id: gameId,
            whitePlayername: "white",
            blackPlayername: "black",
            moves: []
        }
        this.games.push(game);
    }
}
export const gameManager = GameManager.getInstance();



