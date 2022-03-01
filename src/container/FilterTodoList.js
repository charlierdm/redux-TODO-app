import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import {actionTypes} from '../actions'
import TodoList from '../components/TodoList'

const filterTodos = (todos, filter) => {
  switch (filter) {
    case actionTypes.SHOW_ALL:
      return todos
    case actionTypes.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case actionTypes.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error(`${filter} is not recognised`)
  }
}

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.todoFilter),
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)