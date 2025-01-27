import express from "express"

const app = express();
import { variable } from "@repo/common/index";
console.log(variable)
app.get("/", (req, res) => {

    res.json({
        message: "hello world",
        variable
    });;
})