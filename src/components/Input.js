import React, {useState} from "react"

export const Input = () => {
  const [todo, setTodo] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    setTodo('')
  }

  return (
    <form className="Input">
      <input 
        type='text' 
        onChange={(e) => setTodo(e.target.value)}
        value={todo} 
        placeholder='enter a new todo...'
      />
      <button type='submit' onClick={(e) => addTodo(e)}>
        Add Todo
      </button>
    </form>
  )
}