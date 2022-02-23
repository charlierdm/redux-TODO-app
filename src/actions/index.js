export const actionTypes = {
  ADD_TODO: 'ADD_TODO'
}

export const addTodo = todo => {
  return (dispatch, action) => {
    dispatch({
      type: actionTypes.ADD_TODO,
      payload: todo,
    })
  }
} 