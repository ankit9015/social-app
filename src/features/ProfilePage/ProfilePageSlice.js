import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserPost = createAsyncThunk(
  "posts/userPosts",
  async ({ username, storePosts }) => {
    const { data } = await axios.get(`/api/posts/user/${username}`);
    return { ...data, storePosts };
  }
);

export const getUser = createAsyncThunk("user/get", async ({ username }) => {
  const { data } = await axios.get(`api/users/${username}`);
  return data;
});
