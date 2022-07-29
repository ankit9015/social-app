import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../Toast/ToastSlice";

export const createPost = createAsyncThunk(
  "posts/create",
  async ({ authToken, postData }, thunkAPI) => {
    try {
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
      thunkAPI.dispatch(
        addToast({
          message: "Post added",
          type: "success",
        })
      );
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't add the post",
          type: "error",
        })
      );
    }
  }
);
