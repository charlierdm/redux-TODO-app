import {actionTypes} from "../actions"

const todoFilter = (state = actionTypes.SHOW_ALL, action) => {
  switch(action.type) {
    case 'SET_TODOS_FILTER':
      return action.filter
    default:
      return state
  }
}

export default todoFilter