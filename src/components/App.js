import React from 'react'

import Header from './Header'
import TodoInput from './TodoInput'
import Footer from './Footer'
import FilterTodoList from '../container/FilterTodoList'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className='ListInputWrapper'>
        <FilterTodoList />
        <TodoInput />
        <Footer />
      </div>
    </div>
  );
}

export default App