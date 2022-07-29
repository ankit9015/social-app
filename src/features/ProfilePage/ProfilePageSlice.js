import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../common/Toast/ToastSlice";

export const getUserPost = createAsyncThunk(
  "posts/userPosts",
  async ({ username, storePosts }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/posts/user/${username}`);
      return { ...data, storePosts };
    } catch {
      thunkAPI.dispatch(
        addToast({ message: "Unable to fetch posts", type: "error" })
      );
    }
  }
);

export const getUser = createAsyncThunk("user/get", async ({ username }) => {
  const { data } = await axios.get(`api/users/${username}`);
  return data;
});

export const editUserInfo = createAsyncThunk(
  "user/edit",
  async ({ userData, authToken }, thunkAPI) => {
    try {
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
      thunkAPI.dispatch(
        addToast({ message: "User info updated", type: "success" })
      );
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({ message: "Couldn't edit user info", type: "error" })
      );
    }
  }
);

export const followUser = createAsyncThunk(
  "user/follow",
  async ({ followUserUsername, authToken }, thunkAPI) => {
    try {
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
    } catch {
      thunkAPI.dispatch(
        addToast({ message: "Couldn't add user to following", type: "error" })
      );
    }
  }
);

export const unfollowUser = createAsyncThunk(
  "user/unfollow",
  async ({ followUserUsername, authToken }, thunkAPI) => {
    try {
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
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't remove user to following",
          type: "error",
        })
      );
    }
  }
);
