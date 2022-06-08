import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/fetch", async () => {
  const { data } = await axios.get("api/posts/");
  return data;
});
