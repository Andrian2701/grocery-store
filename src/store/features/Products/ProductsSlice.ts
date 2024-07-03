import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { Product } from "../../../components/ProductCard/types";

type Products = {
  data: Product[];
};

export const firestoreApi = createApi({
  reducerPath: "firestoreApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, string | undefined>({
      async queryFn(category: string) {
        try {
          const ref = doc(db, "products", category);
          const docSnap = await getDoc(ref);

          let products: Products[] = [];
          if (docSnap.exists()) {
            const docData = docSnap.data() as Products[];
            products = docData || [];
          }

          return { data: products };
        } catch (error: any) {
          console.error(error.message);
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = firestoreApi;
