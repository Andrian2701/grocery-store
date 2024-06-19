import { createApi } from "@reduxjs/toolkit/query/react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const cartItemsApi = createApi({
  reducerPath: "cartItemsApi",
  baseQuery: (arg) => arg,
  tagTypes: ["cartItems"],
  endpoints: (builder) => ({
    getCartItems: builder.query<any, string | undefined>({
      queryFn: async (uid) => {
        if (!uid) {
          return { data: [] };
        }

        const cartItemsRef = doc(db, "carts", uid);
        return new Promise((resolve) => {
          const unsub = onSnapshot(cartItemsRef, (snapshot) => {
            const data = snapshot.data()?.items;
            resolve({ data });
          });

          return () => unsub();
        });
      },
    }),
  }),
});

export const { useGetCartItemsQuery } = cartItemsApi;
