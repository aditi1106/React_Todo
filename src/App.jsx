import { useEffect, useState } from "react"
import { NewToDoForm } from "./NewToDoForm"
import { ToDoList } from "./ToDoList"
import './style.css'

export default function App() {
  const [todos, setTodo]=useState(()=>{
    const localValue=localStorage.getItem('Task')
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem('Task',JSON.stringify(todos))
  },[todos])

  function addToDo(title){
    setTodo(currentTodo =>{
      return[
        ...currentTodo,{
          id:crypto.randomUUID(), title, completed: false
        },
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodo(currentTodo =>{
      return currentTodo.map(todo =>{
        if( todo.id === id ) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  function removeTodo(id){
    setTodo(currentTodo =>{
      return currentTodo.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
      <NewToDoForm onSubmit={addToDo}/>
      <h1 className="header">ToDo List</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </>

  )
}