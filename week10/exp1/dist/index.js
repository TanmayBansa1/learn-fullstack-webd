"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresurl",
});
function createUserstable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
        yield client.end();
    });
}
function insertIntotable(usernanme, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        //   const result = await client.query(`
        //         INSERT INTO users (username, email, password) VALUES (
        //         'tanmay',
        //         'email@gmail.com',
        //         'pass'
        //         );
        //     `);
        //this is the wrong way of doing this since it can cause SQL injection 
        //that is anyone from the browser can get access to the DB and delete data from it
        //so to avvoid this what we do is 
        const isnertQuery = "insert into users(username,email,password) values($1,$2,$3);";
        const values = [usernanme, email, password];
        const result = yield client.query(isnertQuery, values);
        console.log(result);
        yield client.end();
    });
}
// createUserstable();
insertIntotable("viplove34", "vippi@gmail.cim", "2893674");
