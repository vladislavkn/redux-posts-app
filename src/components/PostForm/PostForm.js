import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../store/actions";
import styles from "./PostForm.module.css";

const PostForm = ({ addPost }) => {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title: postTitle, body: postBody });
    setPostBody("");
    setPostTitle("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles["title"]}>Add post</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.form__input}
          placeholder="Post title"
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <input
          className={styles.form__input}
          placeholder="Post body"
          type="text"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button className={styles["form__submit-btn"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
