import React from 'react'

export default function Todo(props) {
    const {_id , title , isCompleted}=props.task
    return (
        <div className='Todo'>
<p id='p1'>TITLE: {title} </p>
<input className='"form-check-input"'  type="checkbox" defaultChecked={isCompleted} id='CH' onClick={()=>{
    props.updateTask(_id, !isCompleted)  }}/>
<button onClick={()=>{
    props.deleteTask(_id) }}>X</button>

        </div>
    )
}
//updateTask