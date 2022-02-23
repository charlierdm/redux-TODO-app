import {combineReducers} from "@reduxjs/toolkit"
import todos from './todoReducer'

export default combineReducers({
  todos,
})