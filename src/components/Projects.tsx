import React from "react";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import Link from "next/link";
import Skill from "./Skill";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const items = projects.map((project, i) => (
    <div key={i} className="relative flex flex-col items-center">
      <div className="w-3/4 md:w-1/2 xl:w-1/3 mt-10"></div>
      <div className="space-y-10 px-0 md:px-10 max-w-6xl pb-10">
        <h4 className="text-xl font-semibold text-center md:text-2xl lg:text-4xl">
          Project - {i + 1} of {projects.length}:{" "}
          <span className="underline decoration-cyan-300">
            <Link
              href={project.linkToBuild}
              rel="noopener noreferrer"
              target="blank"
            >
              {project.title}
            </Link>
          </span>
        </h4>

        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          src={urlFor(project.image).url()}
          alt="Antefy"
          className=""
        />
      </div>
      <div className="flex space-x-2 my-2">
        {project?.technologies?.map((technology) => (
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
      <p className="text-sm md:text-lg text-center md:text-left">
        {project.summary}
      </p>
    </div>
  ));
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl p-32">
        Projects
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col text-center md:text-left xl:px-10 justify-center xl:space-y-0 items-center w-1/2 "
      >
        <AliceCarousel mouseTracking items={items} />
        {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 scrollbar-thin scrollbar-track-gray-200/20 scrollbar-thumb-cyan-500/20">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center  p-20 lg:p-44 justify-evenly h-screen opacity-90"
          >
            <div className="w-3/4 md:w-1/2 xl:w-1/3 mt-10">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt="Antefy"
                className=""
              />
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center md:text-2xl lg:text-4xl">
                Project - {i + 1} of {projects.length}:{" "}
                <span className="underline decoration-cyan-300">
                  <Link
                    href={project.linkToBuild}
                    rel="noopener noreferrer"
                    target="blank"
                  >
                    {project.title}
                  </Link>
                </span>
              </h4>
              <div className="flex items-center justify-center space-x-2 my-2">
                {project?.technologies?.map((technology) => (
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
              <p className="text-sm md:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      </motion.div>
    </div>
  );
};

export default Projects;
