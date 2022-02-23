let nextId = 0

export const actionTypes = {
  ADD_TODO: 'ADD_TODO'
}

export const addTodo = todo => ({
  type: actionTypes.ADD_TODO,
  id: nextId++,
  todo,
})
