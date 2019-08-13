import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import tasksReducer from '../reducers/tasks';

// historyはsrc/indexで渡す
export default function createStore (history) {
  return reduxCreateStore(
    // combineReducersでstoreを擬似的に小分け.
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  );
}