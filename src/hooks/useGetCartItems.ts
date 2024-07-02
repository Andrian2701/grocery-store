import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

export type CartItems = {
  reduce(
    arg0: (total: number, item: CartItems) => number,
    arg1: number
  ): number;
  category: string;
  imgURL: string;
  name: string;
  productId: number;
  quantity: number;
  selectedQuantity: number;
  totalPrice: number;
  units: string;
};

export const useGetCartItems = (uid: string | undefined) => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  useEffect(() => {
    if (uid) {
      const cartsRef = doc(db, "carts", uid);
      const unsub = onSnapshot(cartsRef, (snapshot) => {
        const data: CartItems[] = snapshot.data()?.items || [];
        setCartItems(data);
      });

      return () => unsub();
    }
  }, [uid]);

  return cartItems;
};
