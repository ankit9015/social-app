import React, { useState } from "react";
import "./Post.css";
import { ArrowBackIcon } from "../../icon";
import { PostBox } from "../common";
import { useLocation } from "react-router-dom";

function Post() {
  const location = useLocation();
  //   console.log(location);
  const [post, setPost] = useState(location.state.post);

  //   uuid is not unique and hence like is not working

  return (
    <main className="post flex-column">
      <div className="post__header flex-row text-md">
        <ArrowBackIcon fontSize="large" />
        <h1>Post</h1>
      </div>
      <section className="post__main-post text-md">
        {post && <PostBox post={post} />}
      </section>
    </main>
  );
}

export default Post;
