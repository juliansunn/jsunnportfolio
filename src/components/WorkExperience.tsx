import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col text-center md:text-left px-5 md:px-10 xl:px-32 min-h-screen justify-center xl:space-y-0 mx-auto items-center my-10"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pb-20">
        Experience
      </h3>
      <div className="flex flex-col items-center w-full md:w-3/4 xl:w-2/3 space-y-5 p-5 ">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
