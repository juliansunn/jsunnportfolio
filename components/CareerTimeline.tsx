"use client";

import type { CSSProperties } from "react";
import { profile } from "@/lib/content";
import { useReveal } from "./useReveal";

export function CareerTimeline() {
  const ref = useReveal<HTMLDivElement>(0.1);
  const label = profile.career.map((c) => `${c.label}, ${c.years}`).join("; ");
  return (
    <>
      <div className="tl-label">Career, 2007 to now</div>
      <div ref={ref} className="tl" role="img" aria-label={`Career timeline: ${label}`}>
        {profile.career.map((c, i) => (
          <div key={c.label} className={`bar ${c.tone}`} style={{ flex: c.span, "--i": i } as CSSProperties}>
            <i />
          </div>
        ))}
      </div>
      <ul className="legend" aria-hidden="true">
        {profile.career.map((c) => (
          <li key={c.label} className={c.tone}>
            {c.label}
            <span>{c.years}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
