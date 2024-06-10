import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "../features/Notification/NotificationSlice";
import ModalWindowReducer from "../features/ModalWindow/ModalWindowSlice";
import { firestoreApi } from "../features/Products/ProductsSlice";
import { addressApi } from "../features/Address/AddressSlice";

export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
    modalWindow: ModalWindowReducer,
    [firestoreApi.reducerPath]: firestoreApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(firestoreApi.middleware)
      .concat(addressApi.middleware),
});
