import React, {useState} from "react"
import {connect, useDispatch} from 'react-redux'

import {addTodo} from "../redux/todoSlice"

const mapStateToProps = (state) => {
  return {
    todos: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj))
  }
}

export const Input = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const addTodo = () => {
    dispatch(addTodo({
      item: todo,
      complete: false,
      id: Math.floor(Math.random() * 1000),
    }))
    setTodo('')
  }

  return (
    <div className="Input">
      <input 
        type='text' 
        onChange={e => setTodo(e.target.value)}
        value={todo} 
        placeholder='enter a new todo...'
      />
      <button onClick={() => addTodo()}>
        Add Todo
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);