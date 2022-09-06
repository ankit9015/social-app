import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addToast } from "../common/Toast/ToastSlice";
import {
  editUserInfo,
  followUser,
  getUser,
  unfollowUser,
} from "../ProfilePage/ProfilePageSlice";

export const getAllUsers = createAsyncThunk(
  "users/all",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/users");
      return data;
    } catch {
      thunkAPI.dispatch(
        addToast({ message: "Couldn't fetch users", type: "error" })
      );
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    allUsers: [],
    openedUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.openedUser = action.payload.user;
    });
    builder.addCase(editUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.openedUser = action.payload.user;
    });
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.users;
    });
    builder.addCase(followUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(followUser.fulfilled, (state, action) => {
      state.loading = false;
      const { user, followUser } = action.payload;
      state.allUsers = [
        ...state.allUsers.filter(
          (_user) => _user._id !== user._id && _user._id !== followUser._id
        ),
        user,
        followUser,
      ];
      state.openedUser =
        state.openedUser?._id === user._id ? user : state.openedUser;
    });
    builder.addCase(unfollowUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(unfollowUser.fulfilled, (state, action) => {
      state.loading = false;
      const { user, followUser } = action.payload;
      state.allUsers = [
        ...state.allUsers.filter(
          (_user) => _user._id !== user._id && _user._id !== followUser._id
        ),
        user,
        followUser,
      ];
      state.openedUser =
        state.openedUser?._id === user._id ? user : state.openedUser;
    });
  },
});

export const { defaultUsersMessage } = userSlice.actions;

export default userSlice.reducer;
