import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

let devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

function composeWithDevTools() {
  const middleware = [thunkMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  return composeEnhancers(applyMiddleware(thunkMiddleware));
}

const enhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(reducers, enhancer);
