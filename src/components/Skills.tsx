import React from "react";
import { motion } from "framer-motion";
import { Paradigm } from "../../typings";
import Skill from "./Skill";

type Props = {
  paradigms: Paradigm[];
};

const Skills = ({ paradigms }: Props) => {
  console.log("paradigms", paradigms);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col  text-center md:text-left xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center space-y-10"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pt-32">
        Skills
      </h3>
      <h3 className=" uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      {paradigms.map((paradigm) => (
        <div
          key={paradigm._id}
          className="flex flex-col items-center space-y-10"
        >
          <h3 className="uppercase tracking-[20px] text-gray-500">
            {paradigm.title}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5 p-5">
            {paradigm.skills
              ?.slice(0, paradigm.skills.length / 2)
              .map((skill) => (
                <Skill key={skill._id} skill={skill} />
              ))}
            {paradigm.skills
              ?.slice(paradigm.skills.length / 2, paradigm.skills.length)
              .map((skill) => (
                <Skill key={skill._id} skill={skill} directionLeft />
              ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
