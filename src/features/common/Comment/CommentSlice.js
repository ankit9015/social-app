import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../Toast/ToastSlice";

export const addComment = createAsyncThunk(
  "posts/comment/create",
  async ({ postId, commentData, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/comments/add/${postId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Comment added to the post",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't add comment",
          type: "error",
        })
      );
    }
  }
);

export const editComment = createAsyncThunk(
  "posts/comment/edit",
  async ({ postId, commentId, commentData, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        {
          commentData,
        },
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Comment edited",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't edit the comment",
          type: "error",
        })
      );
    }
  }
);

export const deleteComment = createAsyncThunk(
  "posts/comment/delete",
  async ({ postId, commentId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/comments/delete/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Comment deleted",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't delete the comment",
          type: "error",
        })
      );
    }
  }
);

export const upVoteComment = createAsyncThunk(
  "posts/comment/upVote",
  async ({ postId, commentId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/comments/upvote/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Upvoted comment",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Comment already upvoted",
          type: "error",
        })
      );
    }
  }
);

export const downVoteComment = createAsyncThunk(
  "posts/comment/downVote",
  async ({ postId, commentId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/comments/downvote/${postId}/${commentId}`,
        {},
        {
          headers: {
            authorization: authToken,
          },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Downvoted comment",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Comment already downvoted",
          type: "error",
        })
      );
    }
  }
);
