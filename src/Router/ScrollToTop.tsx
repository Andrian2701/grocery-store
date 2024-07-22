import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (!state?.preventScrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
};
