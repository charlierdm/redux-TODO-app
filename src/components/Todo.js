import React from "react"
import {connect, useDispatch} from 'react-redux'
import {toggleTodo} from '../actions'

const Todo = ({text, id, completed}) => {
  const dispatch = useDispatch()

  return (
    <li className='Todo'>
      {text}
      <input 
        type='checkbox'
        defaultChecked={completed}
        onClick={() => dispatch(toggleTodo(id))}
      />
    </li>
  )
}

export default connect()(Todo)