import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../../typings";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      "Girl Dad of Two",
      "Runner",
      "Backend Engineer",
      "Husband",
      "Recovering Triathlete",
      "Perpetually Curious Mind",
      "AI Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      {/* Profile picture with neon ring */}
      <div className="relative z-20">
        <div
          className="rounded-full p-[2px] animate-neon-pulse"
          style={{
            background: "linear-gradient(135deg, #00ff9f, #00d4ff, #b700ff, #00ff9f)",
            backgroundSize: "200% 200%",
          }}
        >
          <div className="rounded-full p-[2px] bg-retro-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile-photo.png"
              alt="Julian Sunn"
              className="rounded-full h-36 w-36 mx-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="z-20 space-y-8">
        {/* Role subtitle */}
        <h2
          className="text-xs uppercase tracking-[15px] animate-flicker"
          style={{ color: "#00d4ff", textShadow: "0 0 8px rgba(0,212,255,0.6)" }}
        >
          {pageInfo?.role}
        </h2>

        {/* Main typewriter heading */}
        <h1
          className="text-4xl lg:text-6xl font-semibold px-10 animate-glitch"
          style={{ fontFamily: "Orbitron, monospace", color: "#e0ffe8" }}
        >
          <span>{text}</span>
          <Cursor cursorColor="#00ff9f" />
        </h1>

        {/* Navigation buttons */}
        <div className="flex flex-col space-x-2 space-y-2 sm:flex-row sm:space-y-0 items-center justify-center">
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
