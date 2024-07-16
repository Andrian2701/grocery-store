import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { Product } from "../../../types";

export const firestoreApi = createApi({
  reducerPath: "firestoreApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, string | undefined>({
      async queryFn(category: string | undefined) {
        try {
          let products: Product[] = [];

          if (category) {
            const ref = doc(db, "products", category);
            const docSnap = await getDoc(ref);

            if (docSnap.exists()) {
              const docData = docSnap.data() as Product[];
              products = docData || [];
            }
          } else {
            const productsRef = await getDocs(collection(db, "products"));
            const docSnap = productsRef.docs.map((doc: any) => ({
              ...doc.data(),
            }));
            const flattenData: Product[] = docSnap.flatMap(
              (product) => product.data
            );
            products = flattenData || [];
          }

          return { data: products };
        } catch (error: any) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = firestoreApi;
