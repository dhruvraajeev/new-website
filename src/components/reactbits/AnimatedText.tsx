import { useEffect, useState } from "react";

/**
 * ReactBits-style staggered text reveal: each word slides up with a small
 * delay. Pure CSS transitions triggered on mount — no animation library.
 */
export default function AnimatedText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 50 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-all duration-700 ease-out will-change-transform"
            style={{
              transform: shown ? "translateY(0)" : "translateY(110%)",
              opacity: shown ? 1 : 0,
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {word}
            {" "}
          </span>
        </span>
      ))}
    </span>
  );
}
