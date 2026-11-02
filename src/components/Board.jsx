import "./Board.css"

function Board() {
    return (
        <div className="board_container">
            <div className="task_column" id="to_do_column">
                <h2>To do</h2>
            </div>
            <div className="task_column" id="in_progress_column">
                <h2>In Progress</h2>
            </div>
            <div className="task_column" id="done_column">
                <h2>Done</h2>
            </div>
        </div>
    )
}

export default Board