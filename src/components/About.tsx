/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageInfo } from "../../typings";

// Add photos here — drop files into /public/ and list them.
const PHOTOS: { src: string; caption?: string }[] = [
  { src: "/family.png",       caption: "family" },
  { src: "/profile-photo.png", caption: "julian" },
  // { src: "/ironman.jpg",   caption: "kona 2015" },
  // { src: "/tennis.jpg",    caption: "ncaa tennis" },
];

type Props = {
  pageInfo: PageInfo;
};

const SECTION_META = [
  { label: "origin_story",  color: "#00ff9f" },
  { label: "current_build", color: "#00d4ff" },
  { label: "off_the_clock", color: "#b700ff" },
];

const About = ({ pageInfo }: Props) => {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > photoIdx ? 1 : -1);
    setPhotoIdx(next);
  };
  const prev = () => go((photoIdx - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => go((photoIdx + 1) % PHOTOS.length);

  const paragraphs = (pageInfo?.backgroundInformation ?? "")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col px-5 md:px-10 xl:px-32 min-h-screen justify-center mx-auto items-center py-20"
    >
      <h3 className="section-heading mb-10">About</h3>

      <div className="flex flex-col md:flex-row items-start gap-10 xl:gap-16 w-full max-w-5xl">

        {/* ── LEFT: Photo viewer ── */}
        {PHOTOS.length > 0 && (
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 self-start"
            style={{ width: "220px" }}
          >
            {/* Photo frame */}
            <div className="relative" style={{ border: "1px solid rgba(0,255,159,0.2)", background: "rgba(0,0,0,0.4)" }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 z-10" style={{ borderTop: "1.5px solid #00ff9f", borderLeft: "1.5px solid #00ff9f" }} />
              <div className="absolute top-0 right-0 w-4 h-4 z-10" style={{ borderTop: "1.5px solid #00ff9f", borderRight: "1.5px solid #00ff9f" }} />
              <div className="absolute bottom-0 left-0 w-4 h-4 z-10" style={{ borderBottom: "1.5px solid #00ff9f", borderLeft: "1.5px solid #00ff9f" }} />
              <div className="absolute bottom-0 right-0 w-4 h-4 z-10" style={{ borderBottom: "1.5px solid #00ff9f", borderRight: "1.5px solid #00ff9f" }} />

              {/* Photo slide */}
              <div className="overflow-hidden" style={{ height: "300px" }}>
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.img
                    key={photoIdx}
                    custom={dir}
                    variants={{
                      enter: (d: number) => ({ opacity: 0, x: d * 20 }),
                      center: { opacity: 1, x: 0 },
                      exit:  (d: number) => ({ opacity: 0, x: d * -20 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    src={PHOTOS[photoIdx].src}
                    alt={PHOTOS[photoIdx].caption || "photo"}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      filter: "brightness(0.92) contrast(1.05)",
                    }}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Caption + nav */}
            <div className="mt-2 flex items-center justify-between px-1">
              {/* Prev */}
              {PHOTOS.length > 1 ? (
                <button
                  onClick={prev}
                  style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "11px", color: "rgba(0,255,159,0.5)", background: "none", border: "none", cursor: "pointer", padding: "2px 4px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ff9f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,255,159,0.5)")}
                >←</button>
              ) : <span />}

              {/* Caption + counter */}
              <div className="text-center">
                {PHOTOS[photoIdx].caption && (
                  <p style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "9px", color: "rgba(0,255,159,0.5)", letterSpacing: "2px" }}>
                    {PHOTOS[photoIdx].caption}
                  </p>
                )}
                {PHOTOS.length > 1 && (
                  <p style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "8px", color: "rgba(0,255,159,0.25)", letterSpacing: "1px", marginTop: "2px" }}>
                    {photoIdx + 1} / {PHOTOS.length}
                  </p>
                )}
              </div>

              {/* Next */}
              {PHOTOS.length > 1 ? (
                <button
                  onClick={next}
                  style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "11px", color: "rgba(0,255,159,0.5)", background: "none", border: "none", cursor: "pointer", padding: "2px 4px" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00ff9f")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,255,159,0.5)")}
                >→</button>
              ) : <span />}
            </div>

            {/* Dot indicators */}
            {PHOTOS.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-2">
                {PHOTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    style={{
                      width: i === photoIdx ? "16px" : "5px",
                      height: "5px",
                      borderRadius: i === photoIdx ? "2.5px" : "50%",
                      background: i === photoIdx ? "#00ff9f" : "rgba(0,255,159,0.2)",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Name tag */}
            <div
              className="mt-3 px-2 py-1 text-center"
              style={{ border: "1px solid rgba(0,255,159,0.15)", background: "rgba(0,255,159,0.03)" }}
            >
              <p style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "10px", color: "rgba(0,255,159,0.55)", letterSpacing: "2px" }}>
                {pageInfo?.name?.toLowerCase().replace(" ", "_")}
              </p>
              <p style={{ fontFamily: "Share Tech Mono, monospace", fontSize: "9px", color: "rgba(0,212,255,0.4)", letterSpacing: "1px" }}>
                {pageInfo?.address}
              </p>
            </div>
          </motion.div>
        )}

        {/* ── RIGHT: Bio text ── */}
        <div className="flex flex-col gap-8 flex-1">
          {paragraphs.map((para, i) => {
            const meta = SECTION_META[i] ?? SECTION_META[SECTION_META.length - 1];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
                style={{ borderLeft: `2px solid ${meta.color}33`, paddingLeft: "16px" }}
              >
                <div className="flex items-center gap-2">
                  <span style={{
                    fontFamily: "Share Tech Mono, monospace",
                    fontSize: "11px",
                    color: meta.color,
                    letterSpacing: "2px",
                    textShadow: `0 0 8px ${meta.color}66`,
                  }}>
                    &gt; {meta.label}
                  </span>
                  <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${meta.color}33, transparent)` }} />
                </div>
                <p style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: "1.8",
                  color: "rgba(224,255,232,0.78)",
                  letterSpacing: "0.01em",
                }}>
                  {para}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
};

export default About;
