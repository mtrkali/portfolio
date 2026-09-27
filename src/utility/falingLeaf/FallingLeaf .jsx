"use client";

import React from "react";
import { motion } from "framer-motion";

const FallingLeaf = ({ delay = 0, left = "50%" }) => {
  return (
    <motion.div
      initial={{
        y: -40,
        opacity: 0,
        rotate: 0,
      }}
      animate={{
        y: 430,
        opacity: [0, 1, 1, 0],
        rotate: [0, 90, 180, 270],
        x: [0, 15, -15, 10, 0],
      }}
      transition={{
        duration: 7,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        top-0
        z-20
        pointer-events-none
        select-none
      "
      style={{
        left,
        transform: "translateX(-50%)",
      }}
    >
      <div
        className="
          w-5 h-5
          md:w-7 md:h-7
          rounded-tr-[100%]
          rounded-bl-[100%]
          rounded-tl-sm
          rounded-br-sm
          bg-gradient-to-br
          from-lime-300
          via-green-400
          to-emerald-600
          shadow-lg
          shadow-green-500/30
          rotate-45
        "
      />
    </motion.div>
  );
};

export default FallingLeaf;