import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { PostsForm, PostsList } from "./posts";

const App = () => (
  <Provider store={store}>
    <PostsForm />
    <PostsList />
  </Provider>
);

export default App;
