import "./Header.css"

function Header() {
    return (
        <div className="header_container">
            <h1>TaskFlow</h1>
            <button className="add_button" aria-label="Add new task">+</button>
        </div>
    )
}

export default Header