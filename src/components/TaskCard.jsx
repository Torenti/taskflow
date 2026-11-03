import "./TaskCard.css"

function TaskCard(props) {
    const task = props.task;

    return (
        <button className="task_card" type="button">
            <span className="priority">{task.priority}</span>
            <span className="title">{task.title}</span>
            <span className="desc">{task.desc}</span>
            <span className="status">{task.status}</span>
            <time className="date" dateTime={new Date(task.date).toISOString()}>{new Date(task.date).toLocaleDateString("ru-RU")}</time>
        </button>
    )
}

export default TaskCard