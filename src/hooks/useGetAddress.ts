import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase";

export const useGetAddress = (uid: string | undefined) => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (uid) {
      const addressesRef = doc(db, "addresses", uid);
      const unsub = onSnapshot(addressesRef, (snap) => {
        const address: string = snap.data()?.address || "";
        setAddress(address);
      });

      return () => unsub();
    }
  }, [uid]);

  return address;
};
