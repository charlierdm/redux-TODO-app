import React from "react"

import Todo from './Todo'

const TodoList = ({todos}) => {
  return (
    <ul className='TodoList'>
    {todos && todos.map(todo => (
      <Todo key={todo.id} text={todo.text} />
    ))}
    </ul>
    
  )
}

export default TodoList