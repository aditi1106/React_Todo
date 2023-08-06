import { useState } from "react"

export function NewToDoForm({onSubmit}){
    const [newitem, setnewitem] = useState('')

    function handlesubmit(e){
        e.preventDefault() 
        if (newitem === '') return

        onSubmit(newitem)
    
        setnewitem('')
      }

    return(
        <form onSubmit={handlesubmit} className="Todo-form">
        <div className="form-row">
          <label id='head' htmlFor="task">Add Task</label><br />
          <input type="text"
            value={newitem}
            onChange={e => setnewitem(e.target.value)}
            name="task"
            id="task" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}