import "./TaskAdd.css"

function TaskAdd() {
    return (
        <dialog className="task_add_modal">
            <form className="task_add_container">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Title..." required />

                <label htmlFor="desc">Description</label>
                <textarea name="description" id="desc" rows="4" cols="50" placeholder="Description..."></textarea>

                <label htmlFor="priority">Priority</label>
                <select name="priority" id="priority" defaultValue={"medium"}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label htmlFor="status">Status</label>
                <select name="status" id="status" defaultValue={"to_do"}>
                    <option value="to_do">To do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                <button type="submit">Add task</button>
            </form>
        </dialog>
    )
}

export default TaskAdd