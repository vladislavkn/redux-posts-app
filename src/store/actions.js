export const actionTypes = Object.freeze({
  SET_POSTS: "SET_POSTS",
  ADD_POST: "ADD_POST",
  DELETE_POST: "DELETE_POST",
});

export const setPosts = (posts) => ({
  type: actionTypes.setPosts,
  payload: posts,
});

export const addPost = (post) => ({
  type: actionTypes.ADD_POST,
  payload: post,
});

export const deletePost = (postId) => ({
  type: actionTypes.ADD_POST,
  payload: postId,
});
