import "./Board.css"
import TaskCard from "./TaskCard";

function Board(props) {

    const toDoTasks = props.tasks.filter(task => task.status === "to_do");
    const inProgressTasks = props.tasks.filter(task => task.status === "in_progress");
    const doneTasks = props.tasks.filter(task => task.status === "done");

    return (
        <div className="board_container">
            <div className="task_column" id="to_do_column">
                <h2>To do</h2>
                {toDoTasks.map(task => (
                    <TaskCard key={task.id} task={task} setChosenTask={props.setChosenTask} />
                ))}
            </div>
            <div className="task_column" id="in_progress_column">
                <h2>In Progress</h2>
                {inProgressTasks.map(task => (
                    <TaskCard key={task.id} task={task} setChosenTask={props.setChosenTask} />
                ))}
            </div>
            <div className="task_column" id="done_column">
                <h2>Done</h2>
                {doneTasks.map(task => (
                    <TaskCard key={task.id} task={task} setChosenTask={props.setChosenTask} />
                ))}
            </div>
        </div>
    )
}

export default Board