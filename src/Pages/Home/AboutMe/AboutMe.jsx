import { Download, GraduationCap, Languages, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../../../assets/images/WhatsApp Image 2026-01-20 at 5.50.05 PM.jpeg";

const AboutMe = () => {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="
        relative
        min-h-screen
        w-full
        md:w-[98%]
        lg:w-[98%]
        mx-auto
        flex
        items-center
        justify-center
        overflow-hidden
        py-20
        px-4
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-72
          h-72
          bg-emerald-500/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -bottom-32
          -right-32
          w-72
          h-72
          bg-lime-400/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* ================================================= */}
        {/* LEFT SIDE - IMAGE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            flex
            justify-center
            lg:justify-start
          "
        >
          <div className="relative group">
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                rounded-3xl
                bg-emerald-500/20
                blur-2xl
                scale-95
                group-hover:scale-105
                transition-transform
                duration-500
              "
            />

            {/* Image Frame */}
            <div
              className="
                relative
                p-1
                rounded-3xl
                bg-gradient-to-br
                from-emerald-500
                via-green-500
                to-lime-400
                shadow-2xl
                shadow-emerald-900/30
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-[22px]
                  bg-slate-950
                "
              >
                <img
                  src={hero}
                  alt="Tarak - Full Stack Developer"
                  className="
                    w-[280px]
                    h-[360px]
                    sm:w-[320px]
                    sm:h-[410px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Floating Developer Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -bottom-5
                -right-5
                sm:right-[-25px]
                px-4
                py-3
                rounded-2xl
                border
                border-emerald-400/20
                bg-slate-900/90
                backdrop-blur-xl
                shadow-xl
              "
            >
              <div className="flex items-center gap-2">
                <Code2
                  size={18}
                  className="text-emerald-400"
                />

                <div>
                  <p className="text-xs text-slate-400">
                    Currently
                  </p>

                  <p className="text-sm font-semibold text-white">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* RIGHT SIDE - CONTENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Section Label */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-400/20
              text-emerald-400
              text-sm
              font-medium
              mb-4
            "
          >
            <Code2 size={15} />
            About Me
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              leading-tight
              text-white
            "
          >
            Building ideas into{" "}
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
              real-world applications.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              text-slate-300
              leading-8
              text-base
              lg:text-lg
            "
          >
            I am a passionate Full-Stack Web Developer focused on
            building modern, responsive, and scalable web
            applications. I enjoy turning ideas into functional
            digital products with clean architecture, efficient
            APIs, and intuitive user interfaces.
          </p>

          <p
            className="
              mt-3
              text-slate-400
              leading-7
            "
          >
            My development journey has helped me work across both
            frontend and backend technologies. I continuously
            explore new tools and practices to improve performance,
            security, maintainability, and overall user experience.
          </p>

          {/* ================================================= */}
          {/* EDUCATION */}
          {/* ================================================= */}

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap
                size={21}
                className="text-emerald-400"
              />

              <h3 className="text-xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="relative pl-6 border-l border-emerald-500/30 space-y-5">
              {/* Diploma */}
              <div className="relative">
                <span
                  className="
                    absolute
                    -left-[31px]
                    top-1
                    w-3
                    h-3
                    rounded-full
                    bg-emerald-400
                    shadow-lg
                    shadow-emerald-400/50
                  "
                />

                <h4 className="font-semibold text-white">
                  Diploma in Computer Science & Technology
                </h4>

                <p className="text-sm text-emerald-400 mt-1">
                  Institute of Computer Science & Technology
                  (ICST)
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  CGPA: 3.67 • 2026
                </p>
              </div>

              {/* HSC */}
              <div className="relative">
                <span
                  className="
                    absolute
                    -left-[31px]
                    top-1
                    w-3
                    h-3
                    rounded-full
                    bg-green-400
                  "
                />

                <h4 className="font-semibold text-white">
                  Higher School Certificate (HSC)
                </h4>

                <p className="text-sm text-emerald-400 mt-1">
                  Science • Falahia Madrasah, Feni
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  GPA: 4.13/5.00 • 2020
                </p>
              </div>

              {/* SSC */}
              <div className="relative">
                <span
                  className="
                    absolute
                    -left-[31px]
                    top-1
                    w-3
                    h-3
                    rounded-full
                    bg-lime-400
                  "
                />

                <h4 className="font-semibold text-white">
                  Secondary School Certificate (SSC)
                </h4>

                <p className="text-sm text-emerald-400 mt-1">
                  Science • Falahia Madrasah, Feni
                </p>

                <p className="text-sm text-slate-400 mt-1">
                  GPA: 4.28/5.00 • 2018
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* LANGUAGES */}
          {/* ================================================= */}

          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Languages
                size={21}
                className="text-emerald-400"
              />

              <h3 className="text-xl font-bold text-white">
                Languages
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {/* Bangla */}
              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-4
                  transition-all
                  duration-300
                  hover:border-emerald-400/30
                  hover:bg-emerald-500/5
                "
              >
                <div className="flex justify-between">
                  <span className="font-medium text-white">
                    Bangla
                  </span>

                  <span className="text-xs text-emerald-400">
                    Fluent
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-2">
                  Listening • Reading • Writing • Speaking
                </p>
              </div>

              {/* English */}
              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-4
                  transition-all
                  duration-300
                  hover:border-emerald-400/30
                  hover:bg-emerald-500/5
                "
              >
                <div className="flex justify-between">
                  <span className="font-medium text-white">
                    English
                  </span>

                  <span className="text-xs text-emerald-400">
                    Excellent
                  </span>
                </div>

                <p className="text-xs text-slate-400 mt-2">
                  Reading • Writing • Conversational Speaking
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RESUME BUTTON */}
          {/* ================================================= */}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1Ga3eE31Cc2fOFLT0syfeTRCNjuosInLq",
                "_blank"
              )
            }
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-emerald-600
              hover:bg-emerald-500
              text-white
              font-semibold
              shadow-lg
              shadow-emerald-900/30
              transition-all
              duration-300
            "
          >
            <Download size={18} />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;