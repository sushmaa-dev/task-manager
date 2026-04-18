import { useState } from 'react'



function TaskItem (props){

   
    return (
        <div  onClick = {() =>{
            props.onToggled(props.id)
        }} className="task-item">
                <div className= {props.isDone ? "task-circle done" : "task-circle"}></div>
                <p  className={ props.isDone ? "task-text-done" : "task-text"}>{props.text}</p>
                <button onClick = {()=>{
                    props.onDeleteEachItem(props.id)
                }} className="task-delete">✕</button>
        </div>
    )
}

export default TaskItem;