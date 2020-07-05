import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../store/actions";

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
    <form onSubmit={handleSubmit}>
      <h1>Add post</h1>
      <label>
        Title:
        <input
          type="text"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </label>
      <label>
        Body:
        <input
          type="text"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(null, { addPost })(PostForm);
