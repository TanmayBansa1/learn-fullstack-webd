const express = require("express");
const { todoschema, idschema } = require("./types");
const { Todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get('/mytodos',async (req,res)=>{

    const todos = await Todo.find({});

    res.json({
        todos
    })
})

app.post('/createtodo',async (req,res)=>{
    const createpayload = req.body;
    const parsedpayload = todoschema.safeParse(createpayload);

    if(!parsedpayload.success){

        res.status(411).json({
            msg: "inalid inputs"
        })
        return;

    } 

    await Todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created successfully"
    })



})
app.put('/todocompleted',async (req,res)=>{

    const updatepayload = req.body;
    const parsedpayload = idschema.safeParse(updatepayload);

    if(!parsedpayload.success){

        res.status(411).json({
            msg: "wrong inputs"
        })
        return;
    }else{
        const requiredTodo = await Todo.updateOne({
            _id: updatepayload.id
        },{
            completed: true
        })

        res.json({
            msg: "Todo completed"
        })

    }


})

app.listen(3000);