import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
  "posts/create",
  async ({ authToken, postData }) => {
    const { data } = await axios.post(
      "/api/posts",
      {
        postData: postData,
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
