import {createStore, compose} from '@reduxjs/toolkit'
import rootReducer from './reducers'

export default createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

