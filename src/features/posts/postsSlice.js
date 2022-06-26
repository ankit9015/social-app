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

const handlePending = (state) => {
  state.loading = true;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    message: null,
    filterBy: "LATEST",
    posts: [],
    userPosts: [],
    bookmarks: [],
  },
  reducers: {
    defaultPostssMessage: (state) => {
      state.message = null;
    },
    filterLatestPosts: (state) => {
      state.filterBy = "LATEST";
      state.posts = state.posts.slice().sort((post1, post2) => {
        const date1 = new Date(post1.createdAt).getTime();
        const date2 = new Date(post2.createdAt).getTime();
        return date2 - date1;
      });
    },
    filterTrendingPosts: (state) => {
      state.filterBy = "TRENDING";
      state.posts = state.posts
        .slice()
        .sort((post1, post2) => post2.likes.likeCount - post1.likes.likeCount);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, handlePending);
    builder.addCase(getPosts.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts.reverse();
    });
    builder.addCase(getUniquePost.pending, handlePending);
    builder.addCase(getUniquePost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getUniquePost.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getUserPost.pending, handlePending);
    builder.addCase(getUserPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getUserPost.fulfilled, (state, action) => {
      state.loading = false;
      state.userPosts = action.payload.posts.reverse();
    });
    builder.addCase(createPost.pending, handlePending);
    builder.addCase(createPost.rejected, (state) => {
      state.loading = false;
      state.message = "Post not added";
      console.log("error");
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [
        action.payload.posts[action.payload.posts.length - 1],
        ...state.posts,
      ];
      state.message = "Post added";
      state.userPosts = [
        action.payload.posts[action.payload.posts.length - 1],
        ...state.userPosts,
      ];
    });
    builder.addCase(deletePost.pending, handlePending);
    builder.addCase(deletePost.rejected, (state) => {
      state.loading = false;
      state.message = "Post not deleted";
      console.log("error");
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.message = "Post deleted";
      state.posts = action.payload.posts.reverse();
      state.userPosts = state.userPosts.filter(
        (post) => post._id !== action.payload.deletedPost
      );
    });
    builder.addCase(editPost.pending, handlePending);
    builder.addCase(editPost.rejected, (state) => {
      state.loading = false;
      state.message = "Post not edited";
      console.log("error");
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      const { posts, postId: currPostId } = action.payload;
      state.message = "Post edited";
      state.posts = state.posts.map((post) =>
        post._id === currPostId
          ? posts.find((post) => post._id === currPostId)
          : post
      );
      state.userPosts = state.userPosts.map((post) =>
        post._id === currPostId
          ? posts.find((post) => post._id === currPostId)
          : post
      );
    });
    builder.addCase(likePost.pending, handlePending);
    builder.addCase(likePost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      const { posts, postId: currPostId } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === currPostId
          ? posts.find((post) => post._id === currPostId)
          : post
      );
    });
    builder.addCase(dislikePost.pending, handlePending);
    builder.addCase(dislikePost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(dislikePost.fulfilled, (state, action) => {
      const { posts, postId: currPostId } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === currPostId
          ? posts.find((post) => post._id === currPostId)
          : post
      );
    });
    builder.addCase(bookmarkPost.pending, handlePending);
    builder.addCase(bookmarkPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(bookmarkPost.fulfilled, (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(removeBookmarkPost.pending, handlePending);
    builder.addCase(removeBookmarkPost.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(removeBookmarkPost.fulfilled, (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload.bookmarks;
    });
    builder.addCase(getComments.pending, handlePending);
    builder.addCase(getComments.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addComment.pending, handlePending);
    builder.addCase(addComment.rejected, (state) => {
      state.loading = false;
      state.message = "Comment not added";
      console.log("error");
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.message = "Comment added";
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(editComment.pending, handlePending);
    builder.addCase(editComment.rejected, (state) => {
      state.loading = false;
      state.message = "Comment update failed";
      console.log("error");
    });
    builder.addCase(editComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.message = "Comment update sucessful";
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(deleteComment.pending, handlePending);
    builder.addCase(deleteComment.rejected, (state) => {
      state.loading = false;
      state.message = "Comment not deleted";
      console.log("error");
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      console.log(action);
      const { postId, comments } = action.payload;
      state.loading = false;
      state.message = "Comment deleted";
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(upVoteComment.pending, handlePending);
    builder.addCase(upVoteComment.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(upVoteComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
    builder.addCase(downVoteComment.pending, handlePending);
    builder.addCase(downVoteComment.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(downVoteComment.fulfilled, (state, action) => {
      const { postId, comments } = action.payload;
      state.loading = false;
      state.posts = state.posts.map((post) =>
        post._id === postId ? { ...post, comments: comments } : post
      );
    });
  },
});

export const { defaultPostssMessage, filterLatestPosts, filterTrendingPosts } =
  postsSlice.actions;

export default postsSlice.reducer;
