import { atom, atomFamily, selectorFamily } from "recoil";
import {TODOS} from './TODOS'
import 'axios'
import axios from "axios";
//creating a atom family which can dynamically create atoms for me
export const todoFamily  = atomFamily({
    key: 'todoFamily',
    // default: id => {
    //     return TODOS.find(x => x.id == id);
    // }



    //if we need to hit a backend
    default: selectorFamily({
        key: "todoFamilyselector",
        get: (id)=>{ return async ({get})=>{
            const res = await axios.get("https://sum-server.100xdevs.com/todo?id="+id);
            return res.data.todo;
        }}
    })
});