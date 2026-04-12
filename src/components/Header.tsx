import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const fgcolor = "#00ff9f";
  const bgcolor = "#0a0a0f";
  return (
    <header className="sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center border-b border-[#00ff9f]/10 bg-[#0a0a0f]/80 backdrop-blur-sm">
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
          <p className="uppercase hidden md:inline-flex text-[#00ff9f]/70 px-2 tracking-widest text-sm font-mono hover:text-[#00ff9f] transition-colors">
            Contact Me
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
