import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import reducers from "./reducers";
 
// @ts-ignore 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware()))

ReactDOM.render(  
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);