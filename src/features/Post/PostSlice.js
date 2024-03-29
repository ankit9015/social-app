import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../common/Toast/ToastSlice";

export const getUniquePost = createAsyncThunk(
  "posts/post/get",
  async ({ postId }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/posts/${postId}`);
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({ message: "Unable to fetch post", type: "error" })
      );
    }
  }
);

export const getComments = createAsyncThunk(
  "posts/comments/get",
  async ({ postId }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/comments/${postId}`);
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({ message: "Unable to fetch comments", type: "error" })
      );
    }
  }
);
