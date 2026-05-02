/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const LOCAL_COVERS: Record<string, string> = {
  "LLM Tools SDK": "/project-covers/llm-tools-sdk.svg",
  "Agent-First Clinician Dashboard": "/project-covers/agent-dashboard.svg",
  "Portfolio": "/project-covers/portfolio.svg",
};

const hostname = (url: string) => {
  try { return new URL(url).hostname; } catch { return url; }
};

const Projects = ({ projects }: Props) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > activeIdx ? 1 : -1);
    setActiveIdx(next);
  };
  const prev = () => go((activeIdx - 1 + projects.length) % projects.length);
  const next = () => go((activeIdx + 1) % projects.length);

  const project = projects[activeIdx];

  const isMockRef = project.image?.asset?._ref?.startsWith("image-abc1234");
  let sanityUrl: string | null = null;
  if (!isMockRef) {
    try { sanityUrl = urlFor(project.image).url(); } catch {}
  }
  const coverSrc = sanityUrl || LOCAL_COVERS[project.title] || "/project-covers/portfolio.svg";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 md:px-10 py-20">
      <h3 className="section-heading mb-10">Projects</h3>

      <div className="w-full max-w-2xl flex flex-col gap-6">

        {/* ── Slide ── */}
        <div className="relative overflow-hidden" style={{ minHeight: "520px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col gap-5"
            >
              {/* Counter + title */}
              <div>
                <p style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "10px", color: "rgba(0,255,159,0.4)", letterSpacing: "3px" }}>
                  [{String(activeIdx + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(projects.length).padStart(2, "0")}]
                </p>
                <h4 className="mt-1.5 text-xl md:text-2xl" style={{ fontFamily: "Orbitron, monospace", color: "#e0ffe8", lineHeight: 1.25 }}>
                  <Link
                    href={project.linkToBuild}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{
                      color: "#00d4ff",
                      textShadow: "0 0 8px rgba(0,212,255,0.3)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textShadow = "0 0 14px rgba(0,212,255,0.7)")}
                    onMouseLeave={(e) => (e.currentTarget.style.textShadow = "0 0 8px rgba(0,212,255,0.3)")}
                  >
                    {project.title}&nbsp;↗
                  </Link>
                </h4>
              </div>

              {/* Image frame */}
              <div className="relative" style={{ border: "1px solid rgba(0,212,255,0.18)", background: "rgba(0,0,0,0.3)" }}>
                {/* Terminal bar */}
                <div
                  className="flex items-center gap-2 px-3 py-1.5 overflow-hidden"
                  style={{ borderBottom: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,0,0,0.4)" }}
                >
                  <span style={{ color: "#ff5f56", fontSize: "9px", flexShrink: 0 }}>●</span>
                  <span style={{ color: "#ffbd2e", fontSize: "9px", flexShrink: 0 }}>●</span>
                  <span style={{ color: "#27c93f", fontSize: "9px", flexShrink: 0 }}>●</span>
                  <span
                    className="ml-1 truncate"
                    style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "10px", color: "rgba(0,212,255,0.4)" }}
                  >
                    {hostname(project.linkToBuild)}
                  </span>
                </div>

                <img
                  src={coverSrc}
                  alt={project.title}
                  onError={(e) => {
                    const fallback = LOCAL_COVERS[project.title];
                    if (fallback) e.currentTarget.src = fallback;
                  }}
                  className="w-full object-cover block"
                  style={{ height: "220px", objectPosition: "top" }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3" style={{ borderTop: "1.5px solid #00d4ff", borderLeft: "1.5px solid #00d4ff" }} />
                <div className="absolute top-0 right-0 w-3 h-3" style={{ borderTop: "1.5px solid #00d4ff", borderRight: "1.5px solid #00d4ff" }} />
                <div className="absolute bottom-0 left-0 w-3 h-3" style={{ borderBottom: "1.5px solid #00d4ff", borderLeft: "1.5px solid #00d4ff" }} />
                <div className="absolute bottom-0 right-0 w-3 h-3" style={{ borderBottom: "1.5px solid #00d4ff", borderRight: "1.5px solid #00d4ff" }} />
              </div>

              {/* Tech tags */}
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t._id}
                      style={{
                        fontFamily: "Share Tech Mono, monospace",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        color: "rgba(0,255,159,0.65)",
                        border: "1px solid rgba(0,255,159,0.14)",
                        background: "rgba(0,255,159,0.03)",
                        padding: "2px 8px",
                      }}
                    >
                      {t.title}
                    </span>
                  ))}
                </div>
              )}

              {/* Summary */}
              <p style={{
                fontFamily: "Inter, system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "1.75",
                color: "rgba(224,255,232,0.65)",
              }}>
                {project.summary}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-between">
          {/* Prev */}
          <button
            onClick={prev}
            className="flex items-center gap-2 px-4 py-2 transition-all duration-200 group"
            style={{
              fontFamily: "Share Tech Mono, monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(0,212,255,0.5)",
              border: "1px solid rgba(0,212,255,0.15)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00d4ff";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
              e.currentTarget.style.boxShadow = "0 0 8px rgba(0,212,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(0,212,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ← PREV
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === activeIdx ? "20px" : "6px",
                  height: "6px",
                  borderRadius: i === activeIdx ? "3px" : "50%",
                  background: i === activeIdx ? "#00d4ff" : "rgba(0,212,255,0.2)",
                  boxShadow: i === activeIdx ? "0 0 8px rgba(0,212,255,0.5)" : "none",
                  border: "none",
                  padding: 0,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="flex items-center gap-2 px-4 py-2 transition-all duration-200"
            style={{
              fontFamily: "Share Tech Mono, monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(0,212,255,0.5)",
              border: "1px solid rgba(0,212,255,0.15)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00d4ff";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)";
              e.currentTarget.style.boxShadow = "0 0 8px rgba(0,212,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(0,212,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            NEXT →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
