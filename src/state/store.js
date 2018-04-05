import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers';
import { routerReducer } from 'react-router-redux';

const composeEnhancers =
  (typeof window !== "undefined")
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middleware = composeEnhancers(applyMiddleware(thunkMiddleware));

const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer
});

export const store = createStore(
  combinedReducers,
  middleware
);