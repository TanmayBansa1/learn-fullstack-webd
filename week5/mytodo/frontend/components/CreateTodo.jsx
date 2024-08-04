import { useState } from "react";

export function CreateTodo(){
    
    //create local state variables 
    cosnt [title, setTitle] = useState("");
    cosnt [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onClick={(e)=>{
            const newValue = e.target.value;
            setTitle(newValue);

        }}></input>
        <input type="text" placeholder="description" onClick={(e)=>{
            const newValue = e.target.value;
            setDescription(newValue);
            }} />

        <button>Add Todo</button>
    </div>

}