import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todoList.push(action.payload)
      return state
    }
  }
})

export const {addTodo} = todoSlice.actions
export const reducer = todoSlice.reducer