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
      className="flex flex-col rounded-lg space-y-7 flex-shrink-0 
    items-stretch bg-zinc-700 p-5 md:p-10 "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        alt="company-image"
        className="w-32  object-cover object-center  xl:w-[200px] "
      />
      <div className="">
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
        <ul className=" list-outside list-disc space-y-4 text-lg px-5 text-left">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
