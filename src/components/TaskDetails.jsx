import "./TaskDetails.css"

function TaskDetails() {
    return (
        <dialog className="task_details_modal">
            <form className="task_details_container">
                <button type="button" id="exit" aria-label="Close task details">X</button>

                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Title..." required defaultValue="Task title" />

                <label htmlFor="desc">Description</label>
                <textarea name="description" id="desc" rows="4" cols="50" placeholder="Description..." defaultValue="Task description"></textarea>

                <label htmlFor="priority">Priority</label>
                <select name="priority" id="priority" defaultValue={"high"}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label htmlFor="status">Status</label>
                <select name="status" id="status" defaultValue={"in_progress"}>
                    <option value="to_do">To do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <time className="date" dateTime="2026-02-01">01.02.2026</time>
                <div className="buttons">
                    <button type="submit" id="save_button">Save</button>
                    <button type="button" id="del_button">Delete</button>
                </div>
            </form>
        </dialog>
    )
}

export default TaskDetails