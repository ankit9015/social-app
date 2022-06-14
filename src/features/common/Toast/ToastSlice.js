import { createSlice } from "@reduxjs/toolkit";

const toastsSlice = createSlice({
  name: "toasts",
  initialState: {
    toasts: [],
    id: 0,
  },
  reducers: {
    addToast: (state, action) => {
      console.log(action);
      state.toasts = [
        ...state.toasts,
        { id: state.id++, content: action.payload },
      ];
    },

    removeToast: (state, action) => {
      state.toasts = state.toasts.filter((t) => t._id !== action.payload);
    },
  },
});

export default toastsSlice.reducer;

export const { addToast, removeToast } = toastsSlice.actions;
