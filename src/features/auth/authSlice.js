import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authToken = JSON.parse(localStorage.getItem("authToken"));
const user = JSON.parse(localStorage.getItem("user"));

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const { data } = await axios.post("/api/auth/login", {
      username,
      password,
    });
    return data;
  }
);
export const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ username, password, firstName, lastName, email }) => {
    const { data } = await axios.post("/api/auth/signup", {
      username,
      password,
      firstName,
      lastName,
      email,
    });
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    authToken: authToken ?? null,
    user: user ?? null,
  },
  reducers: {
    logout: (state) => {
      state.authToken = "";
      state.user = "";
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      console.log("error");
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem(
        "authToken",
        JSON.stringify(action.payload.encodedToken)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
    });

    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      console.log("error");
    });

    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem(
        "authToken",
        JSON.stringify(action.payload.encodedToken)
      );
      localStorage.setItem("user", JSON.stringify(action.payload.createdUser));
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
