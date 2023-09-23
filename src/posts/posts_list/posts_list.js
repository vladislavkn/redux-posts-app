import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../common/actions";
import styles from "./posts_list.module.css";

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  const handleDeletePost = useCallback(
    (postId) => {
      dispatch(deletePost(postId));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <div className={styles.post} key={index}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button
            className={styles["post__delete-btn"]}
            onClick={() => handleDeletePost(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
