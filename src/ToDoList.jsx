import { TodoItem } from "./TodoItem"

export function ToDoList({todos, toggleTodo , removeTodo}) {
    return (
        <ul className="List">
            {todos.length === 0 && 'No Todo Task'}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo} 
                        removeTodo={removeTodo} />
                )
            })}
        </ul>)
}