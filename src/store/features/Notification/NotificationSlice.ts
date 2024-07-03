import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {
    open: false,
    vertical: "top",
    horizontal: "center",
  },
};

const NotificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.notification = {
        ...state.notification,
        ...action.payload,
      };
    },
  },
});

export const { setNotification } = NotificationSlice.actions;

export default NotificationSlice.reducer;
