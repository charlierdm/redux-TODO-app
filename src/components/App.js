import React from 'react'

import Header from './Header'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

import './App.css'
import FilterButtons from './FilterButtons'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='ListInputWrapper'>
        <TodoList />
        <TodoInput />
        <FilterButtons />
      </div>
    </div>
  );
}

export default App