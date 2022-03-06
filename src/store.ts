import { useDispatch } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";

// @ts-ignore 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();

export type IDispatch = typeof store.dispatch;
export type IState = typeof store.getState;