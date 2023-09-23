import * as postsAPI from "./posts_api";

export const actionTypes = Object.freeze({
  SET_POSTS: "SET_POSTS",
  ADD_POST: "ADD_POST",
  DELETE_POST: "DELETE_POST",
});

export const fetchPosts = () => async (dispatch) => {
  const posts = await postsAPI.fetchPosts();
  dispatch({
    type: actionTypes.SET_POSTS,
    payload: posts,
  });
};

export const addPost = (post) => async (dispatch) => {
  const newPost = await postsAPI.addPost(post);

  dispatch({
    type: actionTypes.ADD_POST,
    payload: newPost,
  });
};

export const deletePost = (postId) => ({
  type: actionTypes.ADD_POST,
  payload: postId,
});
