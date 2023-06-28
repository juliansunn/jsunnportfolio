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
      className="flex flex-col relative h-screen text-center sm:text-left sm:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-x-2 space-y-2"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="About Me Picture"
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-72 rounded-lg object-cover  sm:w-48 sm:h-96 xl:w-[300px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A little{" "}
          <span className="underline decoration-cyan-500/40">background</span>{" "}
        </h4>
        <p className="text-base flex justify-start text-start">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
