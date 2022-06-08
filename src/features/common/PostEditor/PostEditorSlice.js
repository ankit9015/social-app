import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
  "posts/create",
  async ({ authToken, post }) => {
    const { data } = await axios.post(
      "/api/posts",
      {
        postData: post,
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
