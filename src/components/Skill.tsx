import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className="rounded-full b object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm fond-bold text-black opacity-100">{`${skill.title}`}</p>
          <p className="text-3xl fond-bold text-black opacity-100">{`${skill.progress}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
