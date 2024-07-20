import { configureStore } from "@reduxjs/toolkit";
import FiltersReducer from "./features/Filters/FiltersSlice";
import NotificationReducer from "./features/Notification/NotificationSlice";
import ModalWindowReducer from "./features/ModalWindow/ModalWindowSlice";
import { firestoreApi } from "./features/Products/ProductsSlice";

export const store = configureStore({
  reducer: {
    filters: FiltersReducer,
    notification: NotificationReducer,
    modalWindow: ModalWindowReducer,
    [firestoreApi.reducerPath]: firestoreApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firestoreApi.middleware),
});
