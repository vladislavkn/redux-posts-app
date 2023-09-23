import React, { useState } from "react";
import styles from "./posts_form.module.css";
import { useDispatch } from "react-redux";
import { addPost } from "../common/actions";

const getPostDataInitialState = () => ({
  title: "",
  body: "",
});

const PostsForm = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(getPostDataInitialState());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
    setPostData(getPostDataInitialState());
  };

  return (
    <div className={styles.container}>
      <h1 className={styles["title"]}>Add post</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.form__input}
          placeholder="Post title"
          type="text"
          name="title"
          value={postData.title}
          onChange={handleChange}
        />
        <input
          className={styles.form__input}
          placeholder="Post body"
          type="text"
          name="body"
          value={postData.body}
          onChange={handleChange}
        />
        <button className={styles["form__submit-btn"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostsForm;
