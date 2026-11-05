import "./TaskDetails.css"
import { useState } from 'react'

function TaskDetails(props) {

    const [currentTask, setCurrentTask] = useState(props.chosenTask
        ? {
            title: props.chosenTask.title,
            desc: props.chosenTask.desc,
            priority: props.chosenTask.priority,
            status: props.chosenTask.status
        }
        : null
    );

    function handleSave(event) {
        event.preventDefault();

        const taskForUpdate = {
            id: props.chosenTask.id,
            title: currentTask.title,
            desc: currentTask.desc,
            priority: currentTask.priority,
            status: currentTask.status,
            date: props.chosenTask.date
        }

        props.updateTask(taskForUpdate);
        props.closeTaskDialog();
    }

    function handleDelete() {
        props.deleteTask(props.chosenTask.id);
        props.closeTaskDialog();
    }

    return (
        <dialog className="task_details_modal" ref={props.detailsRef} onClose={props.closeTaskDetails} >
            {props.chosenTask && currentTask && (
                <form className="task_details_container" onSubmit={event => handleSave(event)}>
                    <button type="button" id="exit" aria-label="Close task details" onClick={props.closeTaskDialog}>X</button>

                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title..." required value={currentTask.title} onChange={event => setCurrentTask(prevTask => ({ ...prevTask, title: event.target.value }))} />

                    <label htmlFor="desc">Description</label>
                    <textarea name="description" id="desc" rows="4" cols="50" placeholder="Description..." value={currentTask.desc} onChange={event => setCurrentTask(prevTask => ({ ...prevTask, desc: event.target.value }))}></textarea>

                    <label htmlFor="priority">Priority</label>
                    <select name="priority" id="priority" value={currentTask.priority} onChange={event => setCurrentTask(prevTask => ({ ...prevTask, priority: event.target.value }))}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <label htmlFor="status">Status</label>
                    <select name="status" id="status" value={currentTask.status} onChange={event => setCurrentTask(prevTask => ({ ...prevTask, status: event.target.value }))}>
                        <option value="to_do">To do</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <time className="date" dateTime={new Date(props.chosenTask.date).toISOString()}>{new Date(props.chosenTask.date).toLocaleDateString("ru-RU")}</time>
                    <div className="buttons">
                        <button type="submit" id="save_button">Save</button>
                        <button type="button" id="del_button" onClick={handleDelete}>Delete</button>
                    </div>
                </form>
            )}
        </dialog>
    )

}

export default TaskDetails