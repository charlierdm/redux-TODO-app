import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const addTodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload)
      return state
    }
  }
})

export const {addTodo} = addTodoSlice.actions
export const reducer = addTodoSlice.reducer