import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["address"],
  endpoints: (builder) => ({
    getAddress: builder.query<any, string | undefined>({
      async queryFn(uid) {
        if (!uid) {
          throw new Error("uid is undefined");
        }
        const locationRef = doc(db, "addresses", uid);

        return new Promise((resolve, reject) => {
          const unsubscribe = onSnapshot(locationRef, (snapshot) => {
            const data = snapshot.data();
            resolve({ data });
          });

          return () => unsubscribe();
        });
      },
    }),
  }),
});

export const { useGetAddressQuery } = addressApi;
