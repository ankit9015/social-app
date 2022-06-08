import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: { theme: themeReducer, auth: authReducer, posts: postsReducer },
});
