import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // Use useLayoutEffect so the scroll happens before the browser paints the new route
  useLayoutEffect(() => {
    // jump to the top of the page whenever the pathname changes
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
