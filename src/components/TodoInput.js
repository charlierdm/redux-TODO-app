import React, {useState} from "react"
import {connect, useDispatch} from "react-redux"
import {addTodo} from "../actions"


const TodoInput = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  
  const handleSubmit = e => {
    e.preventDefault()
    if (todo === '') return
    dispatch(addTodo(todo))
    setTodo('')
  }

  return (
    <form 
      className='InputForm' 
      onSubmit={e => handleSubmit(e)}
    >
      <input
        className='InputTodo'
        type='text' 
        onChange={e => setTodo(e.target.value)}
        value={todo} 
        placeholder='enter a new todo...'
      />
      <button className='SubmitTodo' type='submit'>
        Add Todo
      </button>
    </form>
  )
}

export default connect()(TodoInput)