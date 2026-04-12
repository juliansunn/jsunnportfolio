import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillComponent = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      {/* Icon */}
      <motion.div
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
        style={{
          border: "1px solid rgba(0,255,159,0.15)",
          background: "rgba(0,255,159,0.04)",
          padding: "6px",
        }}
      >
        <motion.img
          src={urlFor(skill.image).url()}
          className="object-cover w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
          alt={skill.title}
        />
      </motion.div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-center justify-center z-10"
        style={{
          background: "rgba(10,10,15,0.92)",
          border: "1px solid rgba(0,255,159,0.5)",
          boxShadow: "0 0 10px rgba(0,255,159,0.2), inset 0 0 10px rgba(0,255,159,0.05)",
        }}
      >
        <p
          className="text-[9px] md:text-xs font-bold text-center leading-tight px-1"
          style={{ color: "#00ff9f", fontFamily: "Orbitron, monospace" }}
        >
          {skill.title}
        </p>
        <p
          className="text-base md:text-2xl font-bold mt-1"
          style={{
            color: "#00ff9f",
            textShadow: "0 0 8px rgba(0,255,159,0.8)",
            fontFamily: "Orbitron, monospace",
          }}
        >
          {skill.progress}%
        </p>
      </div>
    </div>
  );
};

export default SkillComponent;
