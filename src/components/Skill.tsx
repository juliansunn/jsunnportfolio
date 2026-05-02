import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillComponent = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -60 : 60, opacity: 0 }}
      transition={{ duration: 0.6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative flex cursor-default"
    >
      <div
        className="relative px-3 py-2 w-full transition-all duration-300 group-hover:border-[rgba(0,255,159,0.4)]"
        style={{
          border: "1px solid rgba(0,255,159,0.15)",
          background: "rgba(0,255,159,0.02)",
          minWidth: "80px",
        }}
      >
        {/* Skill name */}
        <p
          className="text-[10px] md:text-xs text-center leading-tight whitespace-nowrap"
          style={{
            color: "rgba(224,255,232,0.7)",
            fontFamily: "Share Tech Mono, monospace",
            letterSpacing: "0.04em",
          }}
        >
          {skill.title}
        </p>

        {/* Progress bar */}
        <div className="mt-1.5 w-full h-[2px]" style={{ background: "rgba(0,255,159,0.08)" }}>
          <div
            className="h-full"
            style={{
              width: `${skill.progress}%`,
              background: "linear-gradient(90deg, rgba(0,255,159,0.5), rgba(0,212,255,0.5))",
            }}
          />
        </div>

        {/* Percentage — always visible in muted form, brightens on hover */}
        <p
          className="text-center mt-1 transition-all duration-200 group-hover:opacity-100"
          style={{
            fontFamily: "Share Tech Mono, monospace",
            fontSize: "9px",
            color: "rgba(0,255,159,0.35)",
            letterSpacing: "0.05em",
          }}
        >
          <span className="group-hover:text-[#00ff9f] transition-colors duration-200" style={{ fontWeight: "bold" }}>
            {skill.progress}
          </span>
          <span style={{ opacity: 0.6 }}>%</span>
        </p>
      </div>
    </motion.div>
  );
};

export default SkillComponent;
