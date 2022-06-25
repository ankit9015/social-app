import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  editUserInfo,
  followUser,
  getUser,
  unfollowUser,
} from "../ProfilePage/ProfilePageSlice";

export const getAllUsers = createAsyncThunk("users/all", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    message: null,
    loading: false,
    allUsers: [],
    openedUser: null,
  },
  reducers: {
    defaultUsersMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.openedUser = action.payload.user;
    });
    builder.addCase(editUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editUserInfo.rejected, (state) => {
      state.loading = false;
      console.log("error");
      state.message = "Profile Update not complete";
    });
    builder.addCase(editUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.openedUser = action.payload.user;
      state.message = "Profile Updated";
    });
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.loading = false;
      console.log("error");
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsers = action.payload.users;
    });
    builder.addCase(followUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(followUser.rejected, (state) => {
      state.loading = false;
      console.log("error");
      state.message = `Can't follow ${followUser.username}`;
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
      state.message = `Followed ${followUser.username}`;
    });
    builder.addCase(unfollowUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(unfollowUser.rejected, (state) => {
      state.loading = false;
      console.log("error");
      state.message = `Can't Unfollow ${followUser.username}`;
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
      state.message = `Unfollowed ${followUser.username}`;
    });
  },
});

export const { defaultUsersMessage } = userSlice.actions;

export default userSlice.reducer;
