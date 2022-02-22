import {configureStore} from '@reduxjs/toolkit'
import {addTodo} from './addTodoReducer'

export const store = configureStore({reducer: addTodo})
