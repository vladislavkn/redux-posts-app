import React from "react";
import { Provider } from "react-redux";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

const App = () => (
  <Provider>
    <PostForm />
    <Posts />
  </Provider>
);

export default App;
