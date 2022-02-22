import React, {useState} from "react"

export const Input = () => {
  const [todo, setTodo] = useState('')

  const addTodo = () => {
    setTodo('')
  }

  return (
    <div className="Input">
      <input 
        type='text' 
        onChange={(e) => setTodo(e.target.value)}
        value={todo} />
      <button type='submit' onClick={addTodo}>
        Add Todo
      </button>
    </div>
  )
}