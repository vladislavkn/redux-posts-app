import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions";

const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(Posts);
