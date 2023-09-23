import React, { useState } from "react";
import styles from "./PostForm.module.css";
import PostsService from "../../posts_service";

const postService = PostsService.getIntance();

const PostForm = () => {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postService.addPost({ title: postTitle, body: postBody });
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

export default PostForm;
