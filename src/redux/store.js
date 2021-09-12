import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

const rootReducer = combineReducers({});

export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));