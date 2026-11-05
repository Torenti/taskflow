import "./SearchSystem.css"

function SearchSystem(props) {

    function change(id, setCheck) {
        setCheck(prevValues =>
            prevValues.includes(id) ? prevValues.filter(value => value !== id) : [...prevValues, id]
        );
    }

    return (
        <div className="search_system_container">
            <form id="search_form">
                <input
                    id="search_name"
                    type="search"
                    placeholder="Search tasks..."
                    aria-label="Search tasks"
                    value={props.titleToFind}
                    onChange={event => props.setTitleToFind(event.target.value)}
                ></input>
            </form>
            <div className="filter">
                <fieldset id="status">
                    <legend>Status</legend>

                    <div className="checkbox_container" >
                        <input
                            type="checkbox"
                            id="to_do"
                            checked={props.statusCheck.includes("to_do")}
                            onChange={() => change("to_do", props.setStatusCheck)} />
                        <label htmlFor="to_do">To do</label>
                    </div>
                    <div className="checkbox_container">
                        <input
                            type="checkbox"
                            id="in_progress"
                            checked={props.statusCheck.includes("in_progress")}
                            onChange={() => change("in_progress", props.setStatusCheck)}
                        />
                        <label htmlFor="in_progress">In Progress</label>
                    </div>
                    <div className="checkbox_container">
                        <input
                            type="checkbox"
                            id="done"
                            checked={props.statusCheck.includes("done")}
                            onChange={() => change("done", props.setStatusCheck)}
                        />
                        <label htmlFor="done">Done</label>
                    </div>
                </fieldset>
                <fieldset id="priority">
                    <legend>Priority</legend>

                    <div className="checkbox_container">
                        <input
                            type="checkbox"
                            id="low"
                            checked={props.priorityCheck.includes("low")}
                            onChange={() => change("low", props.setPriorityCheck)}
                        />
                        <label htmlFor="low">Low</label>
                    </div>
                    <div className="checkbox_container">
                        <input
                            type="checkbox"
                            id="medium"
                            checked={props.priorityCheck.includes("medium")}
                            onChange={() => change("medium", props.setPriorityCheck)}
                        />
                        <label htmlFor="medium">Medium</label>
                    </div>
                    <div className="checkbox_container">
                        <input
                            type="checkbox"
                            id="high"
                            checked={props.priorityCheck.includes("high")}
                            onChange={() => change("high", props.setPriorityCheck)}
                        />
                        <label htmlFor="high">High</label>
                    </div>
                </fieldset>
                <select id="sort_by" name="sort_by" value={props.sortRule} onChange={event => props.setSortRule(event.target.value)}>
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                </select>
            </div>
        </div>
    )
}

export default SearchSystem