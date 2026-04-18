import { useState } from 'react'
import TaskItem from "./TaskItem";
import FilterButtons from "./FilterButtons";

function TaskList(props){

  const [selectedFilter, setSelectedFilter] = useState("all");

  let filteredItems;

  if(selectedFilter === "all"){
     filteredItems = props.items;
  }else if(selectedFilter === "active"){
    filteredItems = props.items.filter((item) =>{return !item.isDone});
  }else if(selectedFilter === "completed"){
    filteredItems = props.items.filter((item) =>{return item.isDone});
  }




  
    return (
        <div className="task-list">
          <FilterButtons onFilter={setSelectedFilter} onSelectFilter={selectedFilter}/>
         
       {  filteredItems.length === 0
        ?  <div className='empty-state'>
        {selectedFilter === "completed" 
        ? <>
          <div className='empty-icon'>✓</div>
          <p className='empty-title'>No completed tasks yet</p>
          <p className='empty-subtitle'>Complete a task to see it here</p>
        </>
        : <>
          <div className='empty-icon' onClick={()=>{document.querySelector('.input-field').focus()}}>+</div>
          <p className='empty-title'>No tasks yet</p>
          <p className='empty-subtitle'>Add a task above to get started</p>
        </>
          
        }
        </div>


        : filteredItems.map((todoItem) => {
        return <TaskItem 
        text={todoItem.text} 
        key={todoItem.id}
        id={todoItem.id}
        isDone={todoItem.isDone}
        onToggled={props.onToggled}
        onDeleteEachItem = {props.onDeleteEachItem}
         
        />
       })
        }
          
          <div className="taskList-footer">
            <p>{selectedFilter === "completed"
             ? props.taskcompleteCount + (props.taskcompleteCount === 1 ? " task" : " tasks") + " completed"
             : props.taskCount + (props.taskCount === 1 ? " task" : " tasks") + " remaining"
             }

           </p>
           {props.taskcompleteCount > 0 && selectedFilter !=="active" && <button onClick={props.onDelete} className="clear-btn">clear completed</button> } 
          </div>

        </div>
    )
}

export default TaskList;