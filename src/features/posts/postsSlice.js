import { createSlice } from "@reduxjs/toolkit";
import {
  bookmarkPost,
  deletePost,
  dislikePost,
  editPost,
  likePost,
  removeBookmarkPost,
} from "../common/PostBox/PostBoxSlice";
import { createPost } from "../common/PostEditor/PostEditorSlice";
import { getPosts } from "../HomePage/HomePageSlice";
import { getUserPost } from "../ProfilePage/ProfilePageSlice";

const postsSlice = createSlice({
  name: "posts",
  initialState: { loading: false, posts: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(getUserPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getUserPost.fulfilled, (state, action) => {
      const { storePosts } = action.payload;
      state.loading = false;
      state.posts = storePosts;
    });
    builder.addCase(createPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(likePost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(dislikePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(dislikePost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(bookmarkPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(bookmarkPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(bookmarkPost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(removeBookmarkPost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeBookmarkPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(removeBookmarkPost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
    });
  },
});

export default postsSlice.reducer;
