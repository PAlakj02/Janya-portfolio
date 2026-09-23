import { useEffect, useState } from "react";
import { ROLES } from "@/components/binder/content";

/** Swaps roles in place inside the hero — the "changing" happens here, not on a new screen. */
export function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] w-[19ch] items-center overflow-hidden align-bottom">
      {ROLES.map((role, i) => (
        <span
          key={role}
          aria-hidden={i !== index}
          className="accent-italic absolute inset-0 flex items-center whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "translateY(0)" : "translateY(0.4em)",
          }}
        >
          {role}
        </span>
      ))}
      <span className="sr-only">{ROLES.join(", ")}</span>
    </span>
  );
}
