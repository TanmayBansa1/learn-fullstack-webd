const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://tanmaybansal20:Sbog3ylVxBcZtKpu@cluster0.4vy2em1.mongodb.net/todo_list")

const schema1 = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model("todo_list",schema1)

module.exports = {
    Todo
}

