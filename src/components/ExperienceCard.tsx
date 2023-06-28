import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-stretch space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-zinc-700 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="company-image"
        className="w-32 h-32 object-cover object-center rounded-full xl:w-[200px] xl:h-[200px] "
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="text-gray-500 uppercase font-bold text-xl mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              className="h-10 w-10"
              src={urlFor(technology.image)?.url()}
              alt="python"
              height={200}
              width={200}
            />
          ))}
        </div>
        <p className="uppercase py-5">
          Started:{" "}
          <span className="underline decoration-cyan-500/40">
            {new Date(experience.dateStarted).toDateString()}
          </span>{" "}
          -{" "}
          <span className="underline decoration-cyan-500/40">
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </span>
        </p>
        <ul className="list-disc  space-y-4 ml-5 text-lg h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-cyan-500/20">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
