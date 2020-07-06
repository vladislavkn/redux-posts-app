import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts";

const App = () => (
  <Provider store={store}>
    <PostForm />
    <Posts />
  </Provider>
);

export default App;
