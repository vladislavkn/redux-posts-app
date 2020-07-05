import React, { useState, useEffect } from "react";

const Posts = () => {
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
      {posts.map((post) => (
        <p key={post.id}>{post.body}</p>
      ))}
    </div>
  );
};

export default Posts;
