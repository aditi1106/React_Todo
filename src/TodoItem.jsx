export function TodoItem({id,  title,completed, toggleTodo , removeTodo}) {
    return (
        <li>
            <label>
                {title}
                <input 
                type="checkbox" 
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)} />
            </label>
            <button className="btn btn-danger" 
            onClick={e => removeTodo(id)}>Remove</button>
        </li>
    )
}