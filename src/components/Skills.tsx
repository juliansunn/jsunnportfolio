import React from "react";
import { motion } from "framer-motion";
import { Paradigm } from "../../typings";
import Skill from "./Skill";

type Props = {
  paradigms: Paradigm[];
};

const Skills = ({ paradigms }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center min-h-screen justify-center mx-auto items-center px-5 md:px-10 xl:px-20 py-20 space-y-10"
    >
      <h3 className="section-heading">Skills</h3>
      <p
        className="text-xs uppercase tracking-[4px]"
        style={{ color: "rgba(0,212,255,0.45)", fontFamily: "Share Tech Mono, monospace" }}
      >
        &gt; Hover a skill to see proficiency
      </p>

      {paradigms.map((paradigm, pIndex) => (
        <div key={paradigm._id} className="w-full flex flex-col items-center space-y-6">
          {/* Paradigm label */}
          <div className="flex items-center gap-4 w-full max-w-xl">
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,159,0.3))" }}
            />
            <h4
              className="text-xs uppercase tracking-[6px] px-2 whitespace-nowrap"
              style={{
                color: "#00ff9f",
                fontFamily: "Orbitron, monospace",
                textShadow: "0 0 6px rgba(0,255,159,0.4)",
              }}
            >
              {paradigm.title}
            </h4>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, rgba(0,255,159,0.3), transparent)" }}
            />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-4">
            {paradigm.skills?.map((skill, sIndex) => (
              <Skill key={skill._id} skill={skill} directionLeft={sIndex % 2 === 0} />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
