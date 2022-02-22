import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const addTodo = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload)
      return state
    }
  }
})

export const {addTodos} = addTodo.actions
export default addTodo.reducer