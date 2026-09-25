import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element matching the URL hash (e.g. /policy#it-training).
// Deferred a frame so it runs after the route-change scroll-to-top.
const useHashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => {
      const section = document.getElementById(decodeURIComponent(hash.slice(1)));
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
};

export default useHashScroll;
