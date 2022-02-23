let nextId = 0

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  EDIT_TODO: 'EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
}

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  id: nextId++,
  text,
})

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id
})

export const editTodo = (id, text) => ({
  type: actionTypes.EDIT_TODO,
  text: text,
  id
})

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  id
})
