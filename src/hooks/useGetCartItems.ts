import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";
import { CartItems } from "../types";

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
