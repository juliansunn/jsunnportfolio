import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import mypic from "../images/profpicsquare.jpg";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
      "Web Developer",
      "Engineer",
      "Scientist",
      "Runner",
      "Girl Dad",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.profilePicture).url()}
        alt="Profile Photo"
        className="relative rounded-full h-40 w-40 mx-auto opacity-80"
        width={500}
        height={500}
      />
      <div className="z-20 space-y-10">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#00bcd4" />
        </h1>
        <div className="space-x-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
