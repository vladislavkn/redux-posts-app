import { ADD_POST, DELETE_POST } from "../types";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const addPost =
  ({ title, body }) =>
  (dispatch) => {
    fetch(API_URL, {
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
      .then((res) =>
        dispatch({
          type: ADD_POST,
          payload: res,
        })
      );
  };

export const deletePost = (index) => (dispatch) =>
  dispatch({
    type: DELETE_POST,
    payload: index,
  });
