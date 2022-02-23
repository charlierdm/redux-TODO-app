import React, {useState} from "react"
import {connect, useDispatch} from "react-redux"
import {addTodo} from "../actions"


const TodoInput = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  return (
    <form className='InputForm' onSubmit={e => {
      e.preventDefault()
      dispatch(addTodo(todo))
      setTodo('')
    }}>
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