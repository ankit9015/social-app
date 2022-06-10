import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment } from "../Comment/CommentSlice";
import { editPost } from "../PostBox/PostBoxSlice";
import "./PostEditor.css";
import { createPost } from "./PostEditorSlice";

function PostEditor({ currPost, closeEditor, commentOn }) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(
    currPost?.content ? { content: currPost.content } : {}
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.content !== "") {
      if (commentOn) {
        (async () => {
          await dispatch(
            currPost
              ? editComment({
                  postId: commentOn._id,
                  commentId: currPost._id,
                  commentData: formData,
                  authToken,
                })
              : addComment({
                  postId: commentOn._id,
                  commentData: formData,
                  authToken,
                })
          ).unwrap();
          closeEditor ? closeEditor() : setFormData({});
        })();
      } else {
        (async () => {
          await dispatch(
            currPost
              ? editPost({
                  postId: currPost._id,
                  postData: formData,
                  authToken,
                })
              : createPost({ postData: formData, authToken })
          ).unwrap();
          closeEditor ? closeEditor() : setFormData({});
        })();
      }
    }
  };
  return (
    <div className="post-editor">
      <Avatar className="post-editor__avatar" />
      <form className="post-editor__form">
        <textarea
          className="post-editor__text-input"
          type="text"
          value={formData.content ?? ""}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        ></textarea>
        <button
          type="submit"
          className="post-editor__post-button button-primary button text-md"
          onClick={(e) => submitHandler(e)}
        >
          {currPost ? "Save" : "Post"}
        </button>
      </form>
    </div>
  );
}

export default PostEditor;
