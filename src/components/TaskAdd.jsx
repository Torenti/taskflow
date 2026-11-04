import "./TaskAdd.css"

function TaskAdd(props) {

    function taskAddForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const newTask = {
            id: crypto.randomUUID(),
            title: formData.get("title"),
            desc: formData.get("desc"),
            priority: formData.get("priority"),
            status: formData.get("status"),
            date: Date.now()
        }

        props.taskAdd(newTask);
        event.target.reset();
    }

    return (
        <dialog className="task_add_modal" ref={props.dialogRef}>
            <form className="task_add_container" onSubmit={event => taskAddForm(event)}>
                <label htmlFor="title">Title</label>
                <input name="title" id="title" type="text" placeholder="Title..." required />

                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc" rows="4" cols="50" placeholder="Description..."></textarea>

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