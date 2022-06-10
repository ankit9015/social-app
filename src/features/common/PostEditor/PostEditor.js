import { Avatar } from "@mui/material";
import React from "react";
import {
  EmojiEmotionsOutlinedIcon,
  GifBoxOutlinedIcon,
  ImageOutlinedIcon,
} from "../../../icon";
import "./PostEditor.css";

function PostEditor() {
  return (
    <div className="post-editor">
      <Avatar className="post-editor__avatar" />
      <form className="post-editor__form">
        <textarea className="post-editor__text-input" type="text"></textarea>
        <div className="post-editor__icon-buttons">
          <ImageOutlinedIcon fontSize="large" />
          <GifBoxOutlinedIcon fontSize="large" />
          <EmojiEmotionsOutlinedIcon fontSize="large" />
        </div>
        <button
          type="submit"
          className="post-editor__post-button button-primary button"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostEditor;
