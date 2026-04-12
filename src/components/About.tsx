import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left px-5 md:px-10 xl:px-32 min-h-screen justify-center xl:space-y-0 mx-auto items-center my-10"
    >
      <h3 className="section-heading mb-6">About</h3>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
        {/* Profile image with neon frame */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative flex-shrink-0"
        >
          <div
            className="p-[1px]"
            style={{
              background: "linear-gradient(135deg, #00ff9f, #00d4ff, #b700ff)",
            }}
          >
            <motion.img
              src={urlFor(pageInfo?.heroImage).url()}
              alt="About Me Picture"
              className="w-48 h-96 xl:w-[280px] xl:h-[560px] object-cover"
              style={{ filter: "brightness(0.9) contrast(1.05)" }}
            />
          </div>
          {/* Corner decorations */}
          <div
            className="absolute top-0 left-0 w-4 h-4"
            style={{ borderTop: "2px solid #00ff9f", borderLeft: "2px solid #00ff9f" }}
          />
          <div
            className="absolute top-0 right-0 w-4 h-4"
            style={{ borderTop: "2px solid #00ff9f", borderRight: "2px solid #00ff9f" }}
          />
          <div
            className="absolute bottom-0 left-0 w-4 h-4"
            style={{ borderBottom: "2px solid #00ff9f", borderLeft: "2px solid #00ff9f" }}
          />
          <div
            className="absolute bottom-0 right-0 w-4 h-4"
            style={{ borderBottom: "2px solid #00ff9f", borderRight: "2px solid #00ff9f" }}
          />
        </motion.div>

        {/* Text content */}
        <div className="space-y-6 px-0 md:px-8 flex-auto">
          <h4
            className="text-3xl font-semibold"
            style={{ fontFamily: "Orbitron, monospace", color: "#e0ffe8" }}
          >
            A little{" "}
            <span
              style={{
                color: "#00ff9f",
                textDecoration: "underline",
                textDecorationColor: "rgba(0,255,159,0.4)",
                textShadow: "0 0 8px rgba(0,255,159,0.5)",
              }}
            >
              background
            </span>
          </h4>

          {/* Terminal-style info box */}
          <div
            className="p-1 mb-2"
            style={{ border: "1px solid rgba(0,212,255,0.2)", background: "rgba(0,212,255,0.02)" }}
          >
            <div
              className="px-3 py-1 text-xs flex items-center gap-2"
              style={{ borderBottom: "1px solid rgba(0,212,255,0.15)", color: "rgba(0,212,255,0.5)" }}
            >
              <span style={{ color: "#ff5f56" }}>●</span>
              <span style={{ color: "#ffbd2e" }}>●</span>
              <span style={{ color: "#27c93f" }}>●</span>
              <span className="ml-2">bio.txt</span>
            </div>
            <p
              className="text-sm md:text-base leading-relaxed p-4 h-80 xl:h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-neon-green/20 scrollbar-track-transparent text-left"
              style={{ color: "rgba(0,212,255,0.8)", fontFamily: "Share Tech Mono, monospace" }}
            >
              <span style={{ color: "rgba(0,255,159,0.5)" }}>&gt; </span>
              {pageInfo?.backgroundInformation}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
