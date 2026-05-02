import React, { useState } from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

const monogram = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

const fmt = (d: any) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });

type Props = {
  experience: Experience;
  index: number;
};

const ExperienceCard = ({ experience, index }: Props) => {
  const accentColors = ["#00ff9f", "#00d4ff", "#b700ff", "#ff00ff", "#ffcc00"];
  const accent = accentColors[index % accentColors.length];
  const isMockRef = experience?.companyImage?.asset?._ref?.startsWith("image-abc1234");
  const [logoError, setLogoError] = useState(isMockRef ?? false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col w-full p-5 md:p-8 space-y-4"
      style={{
        background: "rgba(13,17,23,0.85)",
        border: `1px solid ${accent}22`,
        borderLeft: `3px solid ${accent}`,
      }}
    >
      {/* Top-right corner accent */}
      <div
        className="absolute top-0 right-0 w-8 h-8"
        style={{ borderTop: `2px solid ${accent}`, borderRight: `2px solid ${accent}`, opacity: 0.6 }}
      />

      {/* Logo + title + date row */}
      <div className="flex items-center gap-4">
        {logoError ? (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-14 h-14 xl:w-16 xl:h-16 flex items-center justify-center rounded shrink-0"
            style={{
              border: `1px solid ${accent}44`,
              background: `${accent}0a`,
              color: accent,
              fontFamily: "Orbitron, monospace",
              fontSize: "clamp(9px, 1.2vw, 14px)",
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            {monogram(experience?.company ?? "")}
          </motion.div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={urlFor(experience?.companyImage).url()}
            alt={experience?.company}
            onError={() => setLogoError(true)}
            className="w-14 h-14 xl:w-16 xl:h-16 object-contain rounded shrink-0"
            style={{ filter: "brightness(0.9) saturate(0.8)" }}
          />
        )}

        <div className="flex-1 min-w-0">
          <h4
            className="text-lg md:text-xl font-light leading-tight"
            style={{ color: "#e0ffe8", fontFamily: "Orbitron, monospace" }}
          >
            {experience?.jobTitle}
          </h4>
          <p
            className="text-xs uppercase font-bold tracking-widest mt-0.5"
            style={{ color: accent }}
          >
            {experience?.company}
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: "rgba(0,212,255,0.45)", fontFamily: "Share Tech Mono, monospace" }}
          >
            <span style={{ color: "rgba(0,212,255,0.25)" }}>[</span>
            {fmt(experience.dateStarted)}
            <span style={{ color: "rgba(0,212,255,0.25)" }}> — </span>
            {experience.isCurrentlyWorkingHere
              ? <span style={{ color: accent }}>Present</span>
              : fmt(experience.dateEnded)}
            <span style={{ color: "rgba(0,212,255,0.25)" }}>]</span>
          </p>
        </div>
      </div>

      {/* Tech stack badges — only when present */}
      {experience?.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology._id}
              className="px-2 py-1 text-[10px] tracking-wider"
              style={{
                fontFamily: "Share Tech Mono, monospace",
                color: "rgba(0,212,255,0.7)",
                border: "1px solid rgba(0,212,255,0.18)",
                background: "rgba(0,212,255,0.04)",
              }}
            >
              {technology.title}
            </span>
          ))}
        </div>
      )}

      {/* Bullet points */}
      <ul className="space-y-2.5 text-left">
        {experience.points?.filter(Boolean).map((point, i) => (
          <li
            key={i}
            className="flex gap-2.5 items-start"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: "1.7",
              color: "rgba(224,255,232,0.72)",
            }}
          >
            <span style={{ color: accent, flexShrink: 0, marginTop: "3px", fontSize: "10px" }}>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ExperienceCard;
