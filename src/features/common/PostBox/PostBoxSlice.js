import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deletePost = createAsyncThunk(
  "posts/delete",
  async ({ postId, authToken }) => {
    const response = await axios.delete(`api/posts/${postId}`, {
      headers: {
        authorization: authToken,
      },
    });
    return response.data;
  }
);

export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ postId, postData, authToken }) => {
    const { data } = await axios.post(
      `/api/posts/edit/${postId}`,
      {
        postData,
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

export const likePost = createAsyncThunk(
  "posts/like",
  async ({ postId, authToken }) => {
    const { data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: authToken },
      }
    );
    return data;
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async ({ postId, authToken }) => {
    const { data } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: authToken },
      }
    );
    return data;
  }
);

export const bookmarkPost = createAsyncThunk(
  "posts/bookmark/add",
  async ({ postId, authToken }) => {
    const { data } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: authToken },
      }
    );
    return data;
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "posts/bookmark/remove",
  async ({ postId, authToken }) => {
    const { data } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: authToken },
      }
    );
    return data;
  }
);
