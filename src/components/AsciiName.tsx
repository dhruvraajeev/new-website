import { useState } from "react";
import ASCIIText from "./reactbits/ASCIIText/ASCIIText";

/**
 * Shows "dhruv" as plain heading text; on hover it morphs into the animated
 * ASCII/wave render (reactbits ASCIIText). Fixed-height box so the WebGL canvas
 * has room to draw.
 */
export default function AsciiName() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative h-48 w-full max-w-xl cursor-pointer select-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <ASCIIText
          text="dhruv"
          asciiFontSize={8}
          textFontSize={160}
          textColor="#38bdf8"
          planeBaseHeight={8}
        />
      ) : (
        <div className="flex h-full items-center">
          <span className="font-heading text-7xl font-bold tracking-tight text-soft sm:text-8xl">
            dhruv
          </span>
        </div>
      )}
    </div>
  );
}
