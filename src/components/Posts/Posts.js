import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../../store/actions";
import styles from "./Posts.module.css";

const Posts = ({ posts, fetchPosts, deletePost }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <div className={styles.post} key={index}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => deletePost(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
