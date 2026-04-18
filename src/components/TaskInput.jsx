import { useState } from 'react'

function TaskInput(props){

    const [inputText, setInputText] = useState("");

     function handleChange(event){
      const newValue = event.target.value;
      setInputText(newValue);
   }

    return (
 
         <div className="input-box">
             
                 <p className="input-label1">New Task</p>
                 <input onChange={handleChange}
                 onKeyDown={(event)=>{
                  if(event.key==="Enter"){
                     props.onAdd(inputText)
                      setInputText("");
                  }
                  }}
                    className="input-field"
                    type="text"
                    value = {inputText}
                    placeholder="What needs to be done?"
                 />
            <div className="input-btn">
                 <button onClick={() =>{
                    props.onAdd(inputText)
                    setInputText("");
                 }} className="add-btn">add task</button>
             </div>
               
        </div>
    )
}

export default TaskInput;