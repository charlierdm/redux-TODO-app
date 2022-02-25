import {combineReducers} from "@reduxjs/toolkit"
import todos from './todoReducer'
import todoFilter from './todoFilterReducer'

export default combineReducers({
  todos,
  todoFilter,
})