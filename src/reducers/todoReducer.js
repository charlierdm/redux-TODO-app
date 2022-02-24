const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          edit: false,
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        (todo.id === action.id) 
        ? {...todo, completed: !todo.completed}
        : todo
      )
    case 'EDIT_TODO':
      return state.map(todo =>
        (todo.id === action.id)
        ? {...todo, edit: !todo.edit}
        : {...todo, edit: false}
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
      default:
        return state
  }
}

export default todos