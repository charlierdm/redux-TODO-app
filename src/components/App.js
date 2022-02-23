import React from 'react'

import {Header} from './Header'
import TodoInput from './TodoInput'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoInput />
    </div>
  );
}
