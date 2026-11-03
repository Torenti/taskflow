import "./TaskCard.css"

function TaskCard() {
    return (
        <button className="task_card" type="button">
            <p className="priority">High</p>
            <h3 className="title">Task title</h3>
            <p className="desc">Task description</p>
            <p className="status">In Progress</p>
            <time className="date" dateTime="2026-02-01">01.02.2026</time>
        </button>
    )
}

export default TaskCard