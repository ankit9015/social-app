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

export const editUserInfo = createAsyncThunk(
  "user/edit",
  async ({ userData, authToken }) => {
    const { data } = await axios.post(
      "/api/users/edit",
      {
        userData,
      },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data;
  }
);

export const followUser = createAsyncThunk(
  "user/follow",
  async ({ followUserUsername, authToken }) => {
    const { data } = await axios.post(
      `/api/users/follow/${followUserUsername}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data;
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollow",
  async ({ followUserUsername, authToken }) => {
    const { data } = await axios.post(
      `/api/users/unfollow/${followUserUsername}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data;
  }
);
