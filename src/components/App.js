import React from 'react'
import {useSelector} from 'react-redux'

import Header from './Header'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

import './App.css'


const App = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div className="App">
      <Header />
      <div className='ListInputWrapper'>
        <TodoList todos={todos} />
        <TodoInput />
      </div>
    </div>
  );
}

export default App