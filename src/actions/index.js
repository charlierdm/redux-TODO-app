let nextId = 0

export const actionTypes = {
  ADD_TODO: 'ADD_TODO'
}

export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
  id: nextId++,
  text,
})
