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
      className="flex flex-col text-center md:text-left px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl pb-20">
        About
      </h3>
      <div className="flex flex-col md:flex-row items-center md:items-start">
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
          className="rounded-lg m-10   w-48 h-96 xl:w-[300px] xl:h-[600px]"
        />
        <div className="space-y-10 px-10 flex-auto md:w-1/2">
          <h4 className="text-4xl font-semibold">
            A little{" "}
            <span className="underline decoration-cyan-500/40">background</span>{" "}
          </h4>
          <p className="flex text-start h-80 overflow-y-scroll scrollbar-thin scrollbar-thumb-cyan-500/20">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
