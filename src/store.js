import {createStore, applyMiddleware, combineReducers} from 'redux'
import {routerMiddleware, connectRouter} from 'connected-react-router'
import history from './history'

const preloadedState = {}

export default createStore(
  combineReducers({
    router: connectRouter(history)
  }),
  preloadedState,
  applyMiddleware(routerMiddleware(history))
)