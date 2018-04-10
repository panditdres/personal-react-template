import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer
})

export const history = createHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;