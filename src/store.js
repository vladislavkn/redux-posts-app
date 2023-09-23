import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { postsReducer } from "./posts";

export default createStore(
  combineReducers({
    posts: postsReducer,
  }),
  {},
  compose(applyMiddleware(thunk))
);
