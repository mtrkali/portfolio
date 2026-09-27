import React, { useEffect, useState } from "react";
import CodeBackground from "../../../utility/BackgroundCode/CodeBackground";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import FallingLeaf from "../../../utility/falingLeaf/FallingLeaf ";
import {
  containerVarients,
  itemVarients,
  tectStack,
} from "../../../utility/techstack/tectStack";
import { Tooltip } from "react-tooltip";
import {
  Download,
  FileText,
  ArrowDown,
  Code2,
  Sparkles,
} from "lucide-react";

const Home = () => {
  const [typingDone, setTypingDone] = useState(false);
  const [btnDone, setBtnDone] = useState(false);

  const text =
    "I am a full-stack developer who loves building things for the web. From responsive user interfaces to secure and efficient backends, I focus on performance, clean code, and great user experience.";

  useEffect(() => {
    const typingTime = text.length * 20;

    const timer = setTimeout(() => {
      setTypingDone(true);
    }, typingTime + 2300);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    if (!typingDone) return;

    const btnTimer = setTimeout(() => {
      setBtnDone(true);
    }, 1300);

    return () => clearTimeout(btnTimer);
  }, [typingDone]);

  return (
    <div
      data-aos="fade-up"
      className="min-h-screen w-full md:w-[98%] lg:w-[98%] mx-auto mt-3 px-2"
    >
      {/* ================= HERO CONTAINER ================= */}
      <div
        className="
          relative overflow-hidden
          flex flex-col-reverse md:flex-row
          items-center justify-between
          gap-10
          min-h-[680px]
          px-5 py-12 md:px-10 lg:px-16
          rounded-3xl
          border border-white/10
          bg-gradient-to-br
          from-slate-950
via-slate-900
to-emerald-950/70
          shadow-2xl
        "
      >
        {/* Background Code */}
        <CodeBackground />

        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none" />

        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-lime-400/20 blur-3xl rounded-full pointer-events-none" />

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-10 w-full md:w-[55%] text-center md:text-left">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex items-center gap-2
              px-4 py-2 mb-5
              rounded-full
              border border-emerald-400/20
bg-emerald-500/10
text-emerald-300
              text-sm font-medium
              backdrop-blur-md
            "
          >
            <Sparkles size={16} />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hey,{" "}
            <span className="text-violet-400">
              I&apos;m Tarak
            </span>
            <br />

            <span className="text-white">
              Full-Stack{" "}
            </span>

            <span
              className="
                bg-gradient-to-r
                from-emerald-400
via-green-400
to-lime-400
                bg-clip-text
                text-transparent
              "
            >
              Developer
            </span>
          </h1>

          {/* Small Developer Line */}
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-slate-400">
            <Code2 size={18} className="text-emrald-400" />

            <span className="text-sm md:text-base">
              MERN Stack • Next.js • TypeScript • Node.js
            </span>
          </div>

          {/* Description */}
          <div
            className="
              mt-6
              max-w-2xl
              min-h-[100px]
              text-slate-300
              text-base md:text-lg
              leading-8
            "
          >
            <Typewriter
              words={[text]}
              loop={1}
              cursor={false}
              typeSpeed={20}
              deleteSpeed={0}
              delaySpeed={1500}
            />
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-7">
            {typingDone && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="flex flex-wrap justify-center md:justify-start gap-3"
              >
                {/* Download CV */}
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1PNIxwiegtnPZwAbNFSAJn_SeWMT9RKGp",
                      "_blank"
                    )
                  }
                  className="
                    group
                    flex items-center gap-2
                    px-5 py-3
                    rounded-xl
                    bg-emrald-600
                    hover:bg-emrald-500
                    text-white
                    text-sm font-semibold
                    shadow-lg shadow-emrald-600/20
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <Download
                    size={17}
                    className="group-hover:animate-bounce"
                  />

                  Download CV
                </button>

                {/* Resume */}
                <button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/uc?export=download&id=1Ga3eE31Cc2fOFLT0syfeTRCNjuosInLq",
                      "_blank"
                    )
                  }
                  className="
                    group
                    flex items-center gap-2
                    px-5 py-3
                    rounded-xl
                    border border-slate-600
                    bg-white/5
                    hover:bg-white/10
                    text-slate-200
                    text-sm font-semibold
                    backdrop-blur-md
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <FileText
                    size={17}
                    className="group-hover:rotate-6 transition-transform"
                  />

                  Resume
                </button>
              </motion.div>
            )}
          </div>

          {/* ================= TECHNOLOGY ================= */}
          <div className="mt-10">
            {btnDone && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="
                    flex items-center
                    justify-center md:justify-start
                    gap-2
                  "
                >
                  <span className="text-slate-400 text-sm">
                    Technologies I work with
                  </span>

                  <div className="h-px w-10 bg-slate-700" />
                </motion.div>

                <motion.div
                  variants={containerVarients}
                  initial="hidden"
                  animate="visible"
                  className="
                    flex flex-wrap
                    items-center
                    justify-center md:justify-start
                    gap-3
                    mt-5
                  "
                >
                  {tectStack.map((tech) => (
                    <motion.div
                      key={tech.id}
                      variants={itemVarients}
                      whileHover={{
                        scale: 1.12,
                        y: -4,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="
                        group
                        flex items-center justify-center
                        w-12 h-12 md:w-14 md:h-14
                        rounded-xl
                        border border-white/10
                        bg-white/5
                        backdrop-blur-md
                        shadow-lg
                        hover:border-emrald-400/40
                        hover:bg-emrald-500/10
                        transition-all duration-300
                      "
                    >
                      <img
                        src={tech.src}
                        alt={tech.name}
                        data-tooltip-id="tech-tooltip"
                        data-tooltip-content={tech.name}
                        className="
                          w-7 h-7 md:w-9 md:h-9
                          object-contain
                          transition-all duration-300
                          group-hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.7)]
                        "
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative z-10 w-full md:w-[40%] flex justify-center">
          {typingDone && (
  <>
    <FallingLeaf delay={0} left="15%" />
    <FallingLeaf delay={1.8} left="35%" />
    <FallingLeaf delay={3.6} left="60%" />
    <FallingLeaf delay={5.4} left="82%" />
  </>
)}

          {/* Outer Glow */}
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              w-[280px] h-[280px]
              md:w-[380px] md:h-[380px]
              rounded-full
              bg-gradient-to-r
from-emerald-500
via-green-500
to-lime-400
              blur-3xl
              opacity-40
            "
          />

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              relative
              w-[270px] h-[270px]
              md:w-[370px] md:h-[370px]
              rounded-full
              p-[5px]
              bg-gradient-to-r
              from-emerald-500
via-green-500
to-lime-400
              shadow-2xl
              shadow-violet-900/40
            "
          >
            <div
              className="
                w-full h-full
                rounded-full
                overflow-hidden
                bg-slate-950
                border-4 border-slate-950
              "
            >
              <img
                src="https://i.ibb.co.com/HptNyC8L/file-00000000fddc820dbba21a7ba3348f10-1.jpg"
                className="
                  w-full h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-110
                "
                alt="Tarak - Full Stack Developer"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            -translate-x-1/2
            hidden md:flex
            flex-col
            items-center
            text-slate-500
          "
        >
          <span className="text-xs mb-1">
            Explore
          </span>

          <ArrowDown size={16} />
        </motion.div>
      </div>

      {/* Tooltip */}
      <Tooltip
        id="tech-tooltip"
        place="top"
        className="
          !bg-slate-950
          !text-white
          !text-xs
          !px-3
          !py-2
          !rounded-lg
          !border
          !border-slate-700
          !shadow-xl
        "
      />
    </div>
  );
};

export default Home;