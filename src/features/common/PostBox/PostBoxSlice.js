import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../Toast/ToastSlice";

export const deletePost = createAsyncThunk(
  "posts/delete",
  async ({ postId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/posts/${postId}`, {
        headers: {
          authorization: authToken,
        },
      });
      thunkAPI.dispatch(addToast({ message: "Post deleted", type: "success" }));
      return { ...data, deletedPost: postId };
    } catch (error) {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't delete post",
          type: "error",
        })
      );
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/edit",
  async ({ postId, postData, authToken }, thunkAPI) => {
    try {
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
      thunkAPI.dispatch(addToast({ message: "Post edited", type: "success" }));
      return { ...data, postId, postData };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't edit post",
          type: "error",
        })
      );
    }
  }
);

export const likePost = createAsyncThunk(
  "posts/like",
  async ({ postId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: authToken },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Post liked",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't like the post",
          type: "error",
        })
      );
    }
  }
);

export const dislikePost = createAsyncThunk(
  "posts/dislike",
  async ({ postId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: authToken },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Post disliked",
          type: "success",
        })
      );
      return { ...data, postId };
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't dislike the post",
          type: "error",
        })
      );
    }
  }
);

export const bookmarkPost = createAsyncThunk(
  "posts/bookmark/add",
  async ({ postId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: authToken },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Post added to Bookmarks",
          type: "success",
        })
      );
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't add the post to bookmarks",
          type: "error",
        })
      );
    }
  }
);

export const removeBookmarkPost = createAsyncThunk(
  "posts/bookmark/remove",
  async ({ postId, authToken }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: authToken },
        }
      );
      thunkAPI.dispatch(
        addToast({
          message: "Post removed from Bookmarks",
          type: "success",
        })
      );
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({
          message: "Couldn't remove the post from bookmarks",
          type: "error",
        })
      );
    }
  }
);
