import "./SearchSystem.css"

function SearchSystem() {
    return (
        <div className="search_system_container">
            <form id="search_form">
                <input id="search_name" type="search" placeholder="Search tasks..." aria-label="Search tasks"></input>
            </form>
            <div className="filter">
                <fieldset id="status">
                    <legend>Status</legend>

                    <div className="checkbox_container">
                        <input type="checkbox" id="to_do" />
                        <label htmlFor="to_do">To do</label>
                    </div>
                    <div className="checkbox_container">
                        <input type="checkbox" id="in_progress" />
                        <label htmlFor="in_progress">In Progress</label>
                    </div>
                    <div className="checkbox_container">
                        <input type="checkbox" id="done" />
                        <label htmlFor="done">Done</label>
                    </div>
                </fieldset>
                <fieldset id="priority">
                    <legend>Priority</legend>

                    <div className="checkbox_container">
                        <input type="checkbox" id="low" />
                        <label htmlFor="low">Low</label>
                    </div>
                    <div className="checkbox_container">
                        <input type="checkbox" id="medium" />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className="checkbox_container">
                        <input type="checkbox" id="high" />
                        <label htmlFor="high">High</label>
                    </div>
                </fieldset>
                <select id="sort_by" name="sort_by">
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>
            </div>
        </div>
    )
}

export default SearchSystem