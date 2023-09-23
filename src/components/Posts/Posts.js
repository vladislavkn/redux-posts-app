import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./Posts.module.css";
import PostsService from "../../posts_service";

const postsService = PostsService.getIntance();

const Posts = ({ posts }) => {
  useEffect(() => {
    postsService.getPosts();
  }, []);

  const handleDeletePost = useCallback((postId) => {
    postsService.deletePost(postId);
  }, []);

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

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Posts);
