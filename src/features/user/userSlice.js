import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../ProfilePage/ProfilePageSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
  },
  reducers: {},
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
    });
  },
});

export default userSlice.reducer;
