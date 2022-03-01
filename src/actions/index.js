let nextId = 0

export const actionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  SELECT_EDIT_TODO: 'SELECT_EDIT_TODO',
  EDIT_TODO: 'EDIT_TODO',
  DELETE_TODO: 'DELETE_TODO',
  SET_TODOS_FILTER: 'SET_TODOS_FILTER',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
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

export const editTodo = id => ({
  type: actionTypes.EDIT_TODO,
  id
})

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  id
})

export const setTodosFilter = filter => ({
  type: actionTypes.SET_TODOS_FILTER,
  filter,
})
  