import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});
