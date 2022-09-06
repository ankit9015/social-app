import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toasts: [],
    id: 0,
  },
  reducers: {
    addToast: (state, action) => {
      const { message, type, timeout } = action.payload;
      state.toasts = [
        ...state.toasts,
        { message, type, timeout: timeout ?? 3000, id: state.id + 1 },
      ];
      state.id += 1;
    },
    removeToast: (state, action) => {
      const { id } = action.payload;
      state.toasts = state.toasts.filter((toast) => toast.id !== id);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
