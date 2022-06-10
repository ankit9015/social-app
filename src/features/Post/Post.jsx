import React, { useEffect, useState } from "react";
import "./Post.css";
import { Comment, PostBox, PostEditor } from "../common";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getUniquePost } from "./PostSlice";

function Post() {
  const dispatch = useDispatch();
  const { posts: storePosts } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(
          getUniquePost({ postId, storePosts })
        ).unwrap();
        setPost(data?.post);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, postId, storePosts]);

  useEffect(() => {
    (async () => {
      try {
        const data = await dispatch(
          getComments({ postId, storePosts })
        ).unwrap();
        setComments(data?.comments);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, postId, storePosts]);

  return (
    <main className="post flex-column">
      <div className="post__header flex-row text-md">
        <h1>Post</h1>
      </div>
      <section className="post__main-post text-md">
        {post && <PostBox post={post} />}
        <div className="comment__editor">
          <h1 className="text-md font-bold">Add comment</h1>
          <PostEditor commentOn={post} />
        </div>
        <h1 className="text-md font-bold">Comments</h1>
        <div className="post__comments flex-column">
          {comments &&
            comments.map((comment) => (
              <Comment key={comment._id} comment={comment} post={post} />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
