import React, { useState, useEffect } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.log);
  }, []);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

export default Post;
