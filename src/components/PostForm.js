import React, { useState } from "react";

const PostForm = () => {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPostBody("");
        setPostTitle("");
      })
      .catch(console.error);
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

export default PostForm;
