import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

export type CurrentUser = User | null;

export const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsub();
  }, []);

  return currentUser;
};
