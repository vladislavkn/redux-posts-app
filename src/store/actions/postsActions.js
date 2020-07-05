import { FETCH_POSTS, ADD_POST } from "../types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: FETCH_POSTS,
        payload: res,
      })
    );
};

export const addPost = ({ title, body }) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .then(
      dispatch({
        type: ADD_POST,
        payload: res,
      })
    );
};
