import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  deleteComment,
  downVoteComment,
  editComment,
  upVoteComment,
} from "../common/Comment/CommentSlice";
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
import { getComments, getUniquePost } from "../Post/PostSlice";

const handleReject = (state) => {
  state.loading = false;
  console.log("error");
};

const handlePending = (state) => {
  state.loading = true;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    userPosts: [],
    bookmarks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, handlePending);
    builder.addCase(getPosts.rejected, handleReject);
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(getUniquePost.pending, handlePending);
    builder.addCase(getUniquePost.rejected, handleReject);
    builder.addCase(getUniquePost.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getUserPost.pending, handlePending);
    builder.addCase(getUserPost.rejected, handleReject);
    builder.addCase(getUserPost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.userPosts = action.payload.posts;
    });
    builder.addCase(createPost.pending, handlePending);
    builder.addCase(createPost.rejected, handleReject);
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.userPosts = [
        ...state.userPosts,
        action.payload.posts[action.payload.posts.length - 1],
      ];
    });
    builder.addCase(deletePost.pending, handlePending);
    builder.addCase(deletePost.rejected, handleReject);
    builder.addCase(deletePost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.posts = action.payload.posts;
      state.userPosts = state.userPosts.filter(
        (post) => post._id !== action.payload.deletedPost
      );
    });
    builder.addCase(editPost.pending, handlePending);
    builder.addCase(editPost.rejected, handleReject);
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.userPosts = state.userPosts.map((post) =>
        post._id === action.payload.postId
          ? { ...post, content: action.payload.postData }
          : post
      );
    });
    builder.addCase(likePost.pending, handlePending);
    builder.addCase(likePost.rejected, handleReject);
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(dislikePost.pending, handlePending);
    builder.addCase(dislikePost.rejected, handleReject);
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
    });
    builder.addCase(bookmarkPost.pending, handlePending);
    builder.addCase(bookmarkPost.rejected, handleReject);
    builder.addCase(bookmarkPost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(removeBookmarkPost.pending, handlePending);
    builder.addCase(removeBookmarkPost.rejected, handleReject);
    builder.addCase(removeBookmarkPost.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(getComments.pending, handlePending);
    builder.addCase(getComments.rejected, handleReject);
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addComment.pending, handlePending);
    builder.addCase(addComment.rejected, handleReject);
    builder.addCase(addComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(editComment.pending, handlePending);
    builder.addCase(editComment.rejected, handleReject);
    builder.addCase(editComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(deleteComment.pending, handlePending);
    builder.addCase(deleteComment.rejected, handleReject);
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      console.log(action);
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(upVoteComment.pending, handlePending);
    builder.addCase(upVoteComment.rejected, handleReject);
    builder.addCase(upVoteComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(downVoteComment.pending, handlePending);
    builder.addCase(downVoteComment.rejected, handleReject);
    builder.addCase(downVoteComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
  },
});

export default postsSlice.reducer;
