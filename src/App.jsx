import { useEffect, useState } from 'react'
import Header from './components/Header'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';


function App() {

   
   const [items, setItems] = useState(()=>{
    const savedItems = localStorage.getItem("myTasks");
    return savedItems ? JSON.parse(savedItems) : [];
   });

   useEffect(()=>{
     localStorage.setItem("myTasks", JSON.stringify(items));
   }, [items]);

   const taskRemaining = items.filter((item)=>{
    return (!item.isDone);
   }).length;

   const taskCompleted = items.filter((item)=>{return item.isDone}).length;
   
  

   function addItems(inputText){
      if(inputText === ""){
        return ;
      }
    const newItem = {
      id : uuidv4(),
      text: inputText,
      isDone:false
    }
     setItems((prevItems) =>{
      return [...prevItems, newItem];
     })
   }

    function toggleIsDone(itemId){
      setItems((prevItems) =>{
        return prevItems.map((eachItem) =>{
          if(eachItem.id === itemId){
            return {...eachItem, isDone: !eachItem.isDone}
          }else{
            return eachItem;
          }
        })
      })
    }
  
    function deleteEachItem(deleteItemId){
        setItems((prevItems) =>{
          return prevItems.filter((item)=>{
            return item.id !== deleteItemId;
          })
        })
    }

    function deleteItems(){ 
      
      setItems((prevItems) =>{
        return prevItems.filter(item =>{
          return !item.isDone;
        })
      })

    }



   
  return (
  <div className="app">
        <Header taskCount = {taskRemaining} />
        <TaskInput onAdd = {addItems}/>

        <TaskList items = {items}
          onToggled = {toggleIsDone}
          onDelete ={deleteItems}
          onDeleteEachItem = {deleteEachItem}
          taskCount = {taskRemaining}
          taskcompleteCount={taskCompleted}
          
        />
        
      
     
        <Footer />
  </div>
  )

}

export default App
