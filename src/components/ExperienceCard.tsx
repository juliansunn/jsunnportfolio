import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
  index: number;
};

const ExperienceCard = ({ experience, index }: Props) => {
  const accentColors = ["#00ff9f", "#00d4ff", "#b700ff", "#ff00ff", "#ffcc00"];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex flex-col w-full p-5 md:p-8 space-y-5"
      style={{
        background: "rgba(13,17,23,0.85)",
        border: `1px solid ${accent}22`,
        borderLeft: `3px solid ${accent}`,
      }}
    >
      {/* Top-right corner accent */}
      <div
        className="absolute top-0 right-0 w-8 h-8"
        style={{
          borderTop: `2px solid ${accent}`,
          borderRight: `2px solid ${accent}`,
          opacity: 0.6,
        }}
      />

      {/* Company logo + title row */}
      <div className="flex items-center gap-4">
        <motion.img
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={urlFor(experience?.companyImage).url()}
          alt="company-image"
          className="w-16 h-16 xl:w-20 xl:h-20 object-contain rounded"
          style={{ filter: "brightness(0.9) saturate(0.8)" }}
        />
        <div>
          <h4
            className="text-xl md:text-2xl font-light"
            style={{ color: "#e0ffe8", fontFamily: "Orbitron, monospace" }}
          >
            {experience?.jobTitle}
          </h4>
          <p
            className="text-sm uppercase font-bold tracking-widest mt-1"
            style={{ color: accent }}
          >
            {experience?.company}
          </p>
        </div>
      </div>

      {/* Tech stack icons */}
      <div className="flex flex-wrap gap-2">
        {experience?.technologies?.map((technology) => (
          <div
            key={technology._id}
            className="p-1"
            style={{ border: "1px solid rgba(0,255,159,0.1)", background: "rgba(0,255,159,0.03)" }}
            title={technology.title}
          >
            <Image
              className="h-7 w-7 object-contain"
              src={urlFor(technology.image)?.url()}
              alt={technology.title || "technology"}
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>

      {/* Date range */}
      <p
        className="text-xs uppercase tracking-widest"
        style={{ color: "rgba(0,212,255,0.5)", fontFamily: "Share Tech Mono, monospace" }}
      >
        <span style={{ color: "rgba(0,212,255,0.3)" }}>[</span>
        {new Date(experience.dateStarted).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        <span style={{ color: "rgba(0,212,255,0.3)" }}> — </span>
        {experience.isCurrentlyWorkingHere
          ? <span style={{ color: accent }}>Present</span>
          : new Date(experience.dateEnded).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        <span style={{ color: "rgba(0,212,255,0.3)" }}>]</span>
      </p>

      {/* Bullet points */}
      <ul className="space-y-3 text-sm text-left">
        {experience.points?.map((point, i) => (
          <li
            key={i}
            className="flex gap-2 items-start leading-relaxed"
            style={{ color: "rgba(224,255,232,0.7)" }}
          >
            <span style={{ color: accent, flexShrink: 0, marginTop: "2px" }}>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export default ExperienceCard;
