import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "../features/Notification/NotificationSlice";

export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
  },
});
