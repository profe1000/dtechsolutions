import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname, hash } = useLocation();

  // Automatically scrolls to top whenever pathname changes,
  // unless a hash is present (useHashScroll handles that case)
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
};

export default ScrollToTop;
