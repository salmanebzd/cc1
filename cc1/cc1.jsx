import React, { useState } from 'react'
import Cc1task from './cc1task'
import { v4 as uuidv4 } from 'uuid'
import "./cc1task.css"


export default function Cc1() {
const [task,settask]=useState([
{id:uuidv4(),nom:'gaming',done:false},
{id:uuidv4(),nom:'coding',done:false},
{id:uuidv4(),nom:'sleeping',done:false}
])
const [addtask,addtaskset]=useState("")
const add=()=>{
    let newtask = [...task];
    let newt = {};
newt.id = uuidv4();
newt.nom = addtask;
newtask.push(newt);
settask(newtask);
addtaskset("");

}
const del=(idmod)=>{
 let nt = task.filter((tk)=>{
    return tk.id != idmod;
 })
 settask(nt)
}
const change=(id)=>{
    let arr = task.map((e)=>{
        if(e.id === id){
            e.done = !e.done;
        }
        return e;
    })
    settask(arr);
}



  return (

    <div className='first'>
        <h1>to do list</h1>
        <form>
           Add task : <input type="text" value={addtask} onChange={(e)=>{addtaskset(e.target.value)}} /> <input type="button" onClick={add} className="add" value="ajouter" />
        </form>
        <br />
        <br />
    <ul>
        {
            task.map((tk)=>{
                return  <li key={tk.id} className={tk.done ? "change" :""}>  <Cc1task delet={()=>del(tk.id)}  txt={tk.nom} vall={()=>change(tk.id)}/> </li>
            })
        }



    </ul>
    </div>
  )
}
