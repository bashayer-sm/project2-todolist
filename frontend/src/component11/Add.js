
import React, { useState } from 'react'
import {Link} from 'react-router-dom';


export default function Add(Props) {
    const [newTitle , setNewTitle]=useState("")
   const createNewTodo=()=>{
console.log('postNewTask')
Props.createfunction({title: newTitle, isCompleted:false })
   }
    return (
        <div className='Add'>
            
<input type="text" placeholder='write the new task ...' onChange={(e)=>{
setNewTitle(e.target.value)
}} />
<button onClick={createNewTodo}>Create New Todo</button>
<br/>
<Link to='Register' >Register</Link>
        </div>
    )
}