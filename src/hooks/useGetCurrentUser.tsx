import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { CurrentUser } from "../types";

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
