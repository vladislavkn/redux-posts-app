import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../../store/actions";
import styles from "./Posts.module.css";
import PostsService from "../../posts_service";

const Posts = ({ posts, deletePost }) => {
  useEffect(() => {
    PostsService.getIntance().getPosts();
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
            onClick={() => deletePost(index)}
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
  fetchPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { deletePost })(Posts);
