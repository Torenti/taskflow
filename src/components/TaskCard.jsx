import "./TaskCard.css"

function TaskCard() {
    return (
        <button className="task_card" type="button">
            <span className="priority">High</span>
            <span className="title">Task title</span>
            <span className="desc">Task description</span>
            <span className="status">In Progress</span>
            <time className="date" dateTime="2026-02-01">01.02.2026</time>
        </button>
    )
}

export default TaskCard