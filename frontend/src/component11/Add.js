
import React, { useState } from 'react'

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
        </div>
    )
}