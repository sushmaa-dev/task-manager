function FilterButtons(props){
    // console.log(props.onSelectFilter);
    return (
        <div className="filterBtnsWrap">
               <button onClick={()=>{props.onFilter("all")}} className={props.onSelectFilter==="all" ? "filter-btn active" : "filter-btn" }>All</button>
               <button onClick={()=>{props.onFilter("active")}} className= {props.onSelectFilter==="active" ? "filter-btn active" : "filter-btn" }>Active</button>
               <button onClick={()=>{props.onFilter("completed")}} className= {props.onSelectFilter==="completed" ? "filter-btn active" : "filter-btn" }>Completed</button>
        </div>
    )
}

export default FilterButtons;