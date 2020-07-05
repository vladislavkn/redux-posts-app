import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

export default store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);
