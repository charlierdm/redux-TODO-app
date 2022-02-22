import React, {useState} from "react"

export const Input = () => {
  const [todo, setTodo] = useState('')

  return (
    <form className="InputForm">
      <input 
        type='text' 
        placeholder="what do you need to do?"
        onChange={(e) => setTodo(e.target.value)}
        value={todo} />
      <button type='submit'>
        Add Todo
      </button>
    </form>
  )
}