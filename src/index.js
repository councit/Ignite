//module imports
import React from "react";
import ReactDOM from "react-dom";
//component imports
import App from "./App";
//redux imports
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//Composing middleware for thunk. Need to combine redux extension and thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Store will be passed down in the Provider wrapper below. This allows whatever components that are wrapped to have access to the store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
