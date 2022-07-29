import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/user/userSlice";
import toastReducer from "../features/common/Toast/ToastSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    toast: toastReducer,
  },
});
