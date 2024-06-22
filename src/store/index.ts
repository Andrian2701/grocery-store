import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "../features/Notification/NotificationSlice";
import ModalWindowReducer from "../features/ModalWindow/ModalWindowSlice";
import { firestoreApi } from "../features/Products/ProductsSlice";
import { addressApi } from "../features/Address/AddressSlice";
import { cartItemsApi } from "../features/CartItems/CartItemsSlice";

export const store = configureStore({
  reducer: {
    notification: NotificationReducer,
    modalWindow: ModalWindowReducer,
    [firestoreApi.reducerPath]: firestoreApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [cartItemsApi.reducerPath]: cartItemsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(firestoreApi.middleware)
      .concat(addressApi.middleware)
      .concat(cartItemsApi.middleware),
});
