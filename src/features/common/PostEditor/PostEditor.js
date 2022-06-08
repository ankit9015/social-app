import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EmojiEmotionsOutlinedIcon,
  GifBoxOutlinedIcon,
  ImageOutlinedIcon,
} from "../../../icon";
import { editPost } from "../PostBox/PostBoxSlice";
import "./PostEditor.css";
import { createPost } from "./PostEditorSlice";

function PostEditor({ post, closeEditor }) {
  const dispatch = useDispatch();
  const { authToken } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(
    post?.content ? { content: post.content } : {}
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.content !== "") {
      (async () => {
        await dispatch(
          post
            ? editPost({ postId: post._id, postData: formData, authToken })
            : createPost({ post: formData, authToken })
        ).unwrap();
        closeEditor ? closeEditor() : setFormData({});
      })();
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
        <div className="post-editor__icon-buttons">
          <ImageOutlinedIcon className="pointer" fontSize="large" />
          <GifBoxOutlinedIcon className="pointer" fontSize="large" />
          <EmojiEmotionsOutlinedIcon className="pointer" fontSize="large" />
        </div>

        <button
          type="submit"
          className="post-editor__post-button button-primary button text-md"
          onClick={(e) => submitHandler(e)}
        >
          {post ? "Save" : "Post"}
        </button>
      </form>
    </div>
  );
}

export default PostEditor;
