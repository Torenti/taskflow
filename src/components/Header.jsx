import "./Header.css"

function Header(props) {
    return (
        <div className="header_container">
            <h1>TaskFlow</h1>
            <button className="add_button" onClick={props.openTaskAdd} aria-label="Add new task">+</button>
        </div>
    )
}

export default Header