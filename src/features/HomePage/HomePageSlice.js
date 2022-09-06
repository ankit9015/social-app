import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../common/Toast/ToastSlice";

export const getPosts = createAsyncThunk("posts/fetch", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("api/posts/");
    return data;
  } catch {
    thunkAPI.dispatch(
      addToast({ message: "Unable to fetch posts", type: "error" })
    );
  }
});
