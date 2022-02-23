import React from "react"
import {connect, useDispatch} from 'react-redux'
import {toggleTodo} from '../actions'

const Todo = ({text, id, completed}) => {
  const dispatch = useDispatch()

  return (
    <li className='Todo'>
      {text}
      <label className='CheckContainer'>
      <input 
        type='checkbox'
        defaultChecked={completed}
        onClick={() => dispatch(toggleTodo(id))}
      />
      <span className='CheckMark' />
      </label>
      
    </li>
  )
}

export default connect()(Todo)