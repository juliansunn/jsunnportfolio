import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative flex justify-center items-center"
    >
      {/* Outer slow-pulse ring — neon green */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full mt-52"
        style={{
          width: 800,
          height: 800,
          border: "1px solid #00ff9f",
          boxShadow: "0 0 20px rgba(0,255,159,0.06), inset 0 0 20px rgba(0,255,159,0.06)",
        }}
      />

      {/* Mid ring — electric blue */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute rounded-full mt-52"
        style={{
          width: 600,
          height: 600,
          border: "1px solid #00d4ff",
          boxShadow: "0 0 15px rgba(0,212,255,0.1), inset 0 0 15px rgba(0,212,255,0.05)",
        }}
      />

      {/* Inner ping ring — neon green hard ping */}
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        className="absolute rounded-full mt-52"
        style={{
          width: 200,
          height: 200,
          border: "1px solid #00ff9f",
          boxShadow: "0 0 10px #00ff9f",
        }}
      />

      {/* Innermost glow core */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full mt-52"
        style={{
          width: 120,
          height: 120,
          background: "radial-gradient(circle, rgba(0,255,159,0.12) 0%, transparent 70%)",
          boxShadow: "0 0 30px rgba(0,255,159,0.2)",
        }}
      />

      {/* Rotating dashed ring — purple */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full mt-52"
        style={{
          width: 700,
          height: 700,
          border: "1px dashed rgba(183,0,255,0.15)",
        }}
      />

      {/* Reverse-rotating dashed ring — pink */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full mt-52"
        style={{
          width: 500,
          height: 500,
          border: "1px dashed rgba(0,212,255,0.1)",
        }}
      />
    </motion.div>
  );
};

export default BackgroundCircles;
