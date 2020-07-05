import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  posts: [],
};

export default store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
