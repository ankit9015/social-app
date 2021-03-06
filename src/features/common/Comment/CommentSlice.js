import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addComment = createAsyncThunk(
  "posts/comment/create",
  async ({ postId, commentData, authToken }) => {
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
    return { ...data, postId };
  }
);

export const editComment = createAsyncThunk(
  "posts/comment/edit",
  async ({ postId, commentId, commentData, authToken }) => {
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
    return { ...data, postId };
  }
);

export const deleteComment = createAsyncThunk(
  "posts/comment/delete",
  async ({ postId, commentId, authToken }) => {
    const { data } = await axios.post(
      `/api/comments/delete/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return { ...data, postId };
  }
);

export const upVoteComment = createAsyncThunk(
  "posts/comment/upVote",
  async ({ postId, commentId, authToken }) => {
    const { data } = await axios.post(
      `/api/comments/upvote/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return { ...data, postId };
  }
);

export const downVoteComment = createAsyncThunk(
  "posts/comment/downVote",
  async ({ postId, commentId, authToken }) => {
    const { data } = await axios.post(
      `/api/comments/downvote/${postId}/${commentId}`,
      {},
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return { ...data, postId };
  }
);
