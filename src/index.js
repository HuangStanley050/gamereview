import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import modalReducer from "./store/reducers/modalReducer";
import authReducer from "./store/reducers/authReducer";
import reviewReducer from "./store/reducers/reviewReducer";
import errorReducer from "./store/reducers/errorReducer";

import App from "./App";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  error: errorReducer,
  reviews: reviewReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
