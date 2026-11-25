"use client";

import type { CSSProperties } from "react";
import type { Viz } from "@/lib/content";
import { useReveal } from "./useReveal";

const W = 400;
const H = 150;

function curve(f: (t: number) => number, n = 80) {
  const pts = Array.from({ length: n + 1 }, (_, j) => [(j / n) * W, f(j / n)]);
  return "M" + pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join("L");
}

const gauss = (t: number, mu: number, s2: number, amp: number) => Math.exp(-((t - mu) ** 2) / s2) * amp;

function Grid() {
  return (
    <g className="grid">
      {[37, 75, 112].map((y) => (
        <line key={y} x1="0" y1={y} x2={W} y2={y} />
      ))}
    </g>
  );
}

function Rating() {
  const level = (r: number) => H - ((r - 1300) / 600) * H;
  const d = curve((t) => level(1350 + 430 * (1 - Math.exp(-3 * t)) + Math.sin(t * 78) * 18 * (1 - t / 2)), 60);
  return (
    <>
      <line className="sec" x1="0" y1={level(1600)} x2={W} y2={level(1600)} />
      <line className="sec" x1="0" y1={level(1800)} x2={W} y2={level(1800)} />
      <text x={W - 2} y={level(1600) - 6} textAnchor="end">Senior</text>
      <text x={W - 2} y={level(1800) - 6} textAnchor="end">Staff</text>
      <path className="line draw" style={{ "--len": 600 } as CSSProperties} d={d} />
    </>
  );
}

function Erg() {
  const blocks: [number, number, boolean][] = [
    [30, 0.35, true], [20, 0.5, true], [22, 0.95, false], [10, 0.45, true], [22, 0.95, false],
    [10, 0.45, true], [22, 0.95, false], [10, 0.45, true], [22, 0.95, false], [30, 0.35, true],
  ];
  const total = blocks.reduce((s, b) => s + b[0], 0);
  let x = 0;
  return (
    <>
      {blocks.map(([w, h, easy], i) => {
        const bw = (w / total) * W;
        const rect = (
          <rect
            key={i}
            className={easy ? "bar easy" : "bar"}
            style={{ "--i": i } as CSSProperties}
            x={x + 1}
            y={H - h * H * 0.9}
            width={bw - 2}
            height={h * H * 0.9}
          />
        );
        x += bw;
        return rect;
      })}
    </>
  );
}

function Glucose() {
  const glucose = curve((t) => 120 - gauss(t, 0.18, 0.006, 70) - gauss(t, 0.6, 0.008, 55));
  const insulin = curve((t) => 128 - gauss(t, 0.24, 0.008, 60) - gauss(t, 0.66, 0.01, 45));
  return (
    <>
      <path className="sec" d={insulin} />
      <path className="line draw" style={{ "--len": 700 } as CSSProperties} d={glucose} />
    </>
  );
}

function Equalizer() {
  return (
    <>
      {Array.from({ length: 28 }, (_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.9) * 60 + Math.sin(i * 0.37) * 40);
        return (
          <rect key={i} className="bar" style={{ "--i": i % 14 } as CSSProperties} x={i * 14.3} y={140 - h} width="9" height={h} rx="4.5" />
        );
      })}
    </>
  );
}

const CHARTS: Record<Viz, () => React.JSX.Element> = { rating: Rating, erg: Erg, glucose: Glucose, eq: Equalizer };

export function ProjectChart({ viz, caption, note, accent }: { viz: Viz; caption: string; note: string; accent?: string }) {
  const ref = useReveal<HTMLElement>();
  const Chart = CHARTS[viz];
  return (
    <figure ref={ref} className="viz" style={accent ? ({ "--c": accent } as CSSProperties) : undefined}>
      <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        <Grid />
        <Chart />
      </svg>
      <figcaption>
        <span>{caption}</span>
        <b>{note}</b>
      </figcaption>
    </figure>
  );
}
