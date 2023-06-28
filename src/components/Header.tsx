import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const fgcolor = "#00bcd4";
  const bgcolor = "#eeeeee";
  return (
    <header className="sticky top-0 flex itemx-start justify-between p-5 max-w-7xl mx-auto z-20 xl:itemx-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center space-x-2 "
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor={fgcolor}
            bgColor={bgcolor}
            title={social.title}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor={fgcolor}
            bgColor={bgcolor}
            title="Get in touch"
          />
          <p className="uppercase hidden md:inline-flex text-gray-500 px-2">
            Contact Me
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
