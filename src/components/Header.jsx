
const date = new Date();
const dateFormat = {weekday: 'long', month: 'short', day: 'numeric'};
const finalDate = date.toLocaleDateString('en-US', dateFormat);

function Header(props){
    return (
    <header className="header">
      <div>
          <p className="header-date">{finalDate}</p>
          <h1 className="header-title">Task Manager</h1>
      </div>
      <div className="header-count">
           <p>{props.taskCount} remaining</p>
      </div>
    </header>
    )
}

export default Header;