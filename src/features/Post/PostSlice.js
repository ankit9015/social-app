import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUniquePost = createAsyncThunk(
  "posts/post/get",
  async ({ postId, storePosts }) => {
    const { data } = await axios.get(`/api/posts/${postId}`);
    return { ...data, storePosts };
  }
);

export const getComments = createAsyncThunk(
  "posts/comments/get",
  async ({ postId, storePosts }) => {
    const { data } = await axios.get(`/api/comments/${postId}`);
    return { ...data, storePosts };
  }
);
