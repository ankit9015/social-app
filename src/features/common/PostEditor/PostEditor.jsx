import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPhotoAlternateOutlinedIcon } from "../../../icon";
import { addComment, editComment } from "../Comment/CommentSlice";
import { editPost } from "../PostBox/PostBoxSlice";
import "./PostEditor.css";
import { createPost } from "./PostEditorSlice";

function PostEditor({ currPost, commentOn }) {
  const dispatch = useDispatch();
  const { user, authToken } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    content: currPost?.content ?? "",
    images: currPost?.images.length > 0 ? currPost?.images : [],
  });
  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.content !== "" || formData.images.length > 0) {
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
                  commentData: { ...formData, profileImage: user.profileImage },
                  authToken,
                })
          ).unwrap();
          setFormData({ content: "", images: [] });
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
              : createPost({
                  postData: { ...formData, profileImage: user.profileImage },
                  authToken,
                })
          ).unwrap();
          setFormData({ content: "", images: [] });
        })();
      }
    }
  };

  return (
    <div className="post-editor">
      <Avatar className="post-editor__avatar" src={user.profileImage} />
      <form className="post-editor__form">
        <textarea
          className="post-editor__text-input"
          maxLength={500}
          type="text"
          value={formData.content ?? ""}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        ></textarea>
        <p className="text-md char-count">{formData.content.length}/500</p>
        <div className="post-editor__input-files">
          {formData.images.length > 0 &&
            formData.images.map((item, idx) => (
              <p key={idx} className="text-md">
                <small>{item.name}</small>
              </p>
            ))}
        </div>
        <div className="post-editor__image">
          <label htmlFor="images" className="pointer">
            <AddPhotoAlternateOutlinedIcon fontSize="large" />
          </label>
          <input
            className="post-editor__images-input--hidden"
            type="file"
            multiple
            accept="image/*"
            alt="post-images"
            name="images"
            id="images"
            onChange={(e) => {
              const files = e.target.files;
              const images = [];
              for (const file of files) {
                images.push({
                  name: file.name,
                  src: URL.createObjectURL(file),
                });
              }
              setFormData({
                ...formData,
                images: images,
              });
            }}
          />
        </div>
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
