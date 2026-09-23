import { useCallback, useEffect, useState } from "react";

/** Minimal client-side router: real URLs, no page reloads, browser back/forward supported. */
export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to !== window.location.pathname) {
      window.history.pushState(null, "", to);
      setPath(to);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const segments = path.split("/").filter(Boolean);
  return { path, segments, navigate };
}
