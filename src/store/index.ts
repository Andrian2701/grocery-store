import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "../features/Notification/NotificationSlice";
import { firestoreApi } from "../features/Products/ProductsSlice";

export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
    [firestoreApi.reducerPath]: firestoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firestoreApi.middleware),
});
