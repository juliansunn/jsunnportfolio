import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import Link from "next/link";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const items = projects.map((project, i) => (
    <div key={i} className="relative flex flex-col gap-4 px-4 pb-8">
      {/* Project header */}
      <h4
        className="text-lg md:text-2xl font-semibold text-center"
        style={{ fontFamily: "Orbitron, monospace", color: "#e0ffe8" }}
      >
        <span style={{ color: "rgba(0,255,159,0.4)", fontSize: "0.7em" }}>
          [{String(i + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}]
        </span>{" "}
        <span
          style={{
            color: "#00d4ff",
            textDecoration: "underline",
            textDecorationColor: "rgba(0,212,255,0.4)",
            textShadow: "0 0 8px rgba(0,212,255,0.4)",
          }}
        >
          <Link href={project.linkToBuild} rel="noopener noreferrer" target="_blank">
            {project.title}
          </Link>
        </span>
      </h4>

      {/* Project image with neon frame */}
      <div className="relative">
        <div
          className="p-[1px]"
          style={{ border: "1px solid rgba(0,212,255,0.2)", background: "rgba(0,212,255,0.02)" }}
        >
          {/* Terminal bar */}
          <div
            className="px-3 py-1.5 flex items-center gap-2 text-xs"
            style={{
              borderBottom: "1px solid rgba(0,212,255,0.15)",
              color: "rgba(0,212,255,0.4)",
              background: "rgba(0,0,0,0.3)",
            }}
          >
            <span style={{ color: "#ff5f56" }}>●</span>
            <span style={{ color: "#ffbd2e" }}>●</span>
            <span style={{ color: "#27c93f" }}>●</span>
            <span className="ml-2 font-mono">{project.linkToBuild}</span>
          </div>
          <motion.img
            initial={{ y: -20, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            src={urlFor(project.image).url()}
            alt={project.title}
            className="w-full object-cover"
            style={{ maxHeight: "280px", objectPosition: "top" }}
          />
        </div>
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-4 h-4" style={{ borderTop: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" }} />
        <div className="absolute top-0 right-0 w-4 h-4" style={{ borderTop: "2px solid #00d4ff", borderRight: "2px solid #00d4ff" }} />
        <div className="absolute bottom-0 left-0 w-4 h-4" style={{ borderBottom: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff" }} />
        <div className="absolute bottom-0 right-0 w-4 h-4" style={{ borderBottom: "2px solid #00d4ff", borderRight: "2px solid #00d4ff" }} />
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project?.technologies?.map((technology) => (
          <div
            key={technology._id}
            className="p-1"
            style={{
              border: "1px solid rgba(0,255,159,0.1)",
              background: "rgba(0,255,159,0.03)",
            }}
            title={technology.title}
          >
            <Image
              className="h-5 w-5 object-contain"
              src={urlFor(technology.image)?.url()}
              alt={technology.title || "technology"}
              height={100}
              width={100}
            />
          </div>
        ))}
      </div>

      {/* Summary */}
      <p
        className="text-sm leading-relaxed text-left"
        style={{ color: "rgba(224,255,232,0.6)", fontFamily: "Share Tech Mono, monospace" }}
      >
        <span style={{ color: "rgba(0,255,159,0.4)" }}>&gt; </span>
        {project.summary}
      </p>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 md:px-10">
      <h3 className="section-heading pt-20 mb-10">Projects</h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full max-w-3xl"
        style={{ border: "1px solid rgba(0,212,255,0.1)", background: "rgba(13,17,23,0.7)" }}
      >
        <AliceCarousel
          autoHeight
          autoPlayInterval={4000}
          mouseTracking
          items={items}
          infinite
          disableButtonsControls={false}
          renderPrevButton={() => (
            <div
              className="flex items-center justify-center w-8 h-8 cursor-pointer select-none"
              style={{ color: "rgba(0,212,255,0.6)", border: "1px solid rgba(0,212,255,0.2)", fontSize: "18px" }}
            >
              ‹
            </div>
          )}
          renderNextButton={() => (
            <div
              className="flex items-center justify-center w-8 h-8 cursor-pointer select-none"
              style={{ color: "rgba(0,212,255,0.6)", border: "1px solid rgba(0,212,255,0.2)", fontSize: "18px" }}
            >
              ›
            </div>
          )}
        />
      </motion.div>
    </div>
  );
};

export default Projects;
