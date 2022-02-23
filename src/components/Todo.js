import React from "react"
import {connect, useDispatch} from 'react-redux'
import {toggleTodo, editTodo} from '../actions'

const Todo = ({text, id, completed}) => {
  const dispatch = useDispatch()

  return (
    <li className='Todo'>
      {text}
      <div className='SvgCheckboxWrapper'>
        <img src='/edit.svg' alt='edit pencil' />
        <img src='delete.svg' alt='delete bin' />
        <label className='CheckContainer'>
          <input 
            type='checkbox'
            defaultChecked={completed}
            onClick={() => dispatch(toggleTodo(id))}
          />
          <span className='CheckMark' />
        </label>
      </div> 
    </li>
  )
}

export default connect()(Todo)