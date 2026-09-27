import React from "react";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { tectStack } from "../../../utility/techstack/tectStack";
import SkillBar from "../../../utility/skillBar/SkillBar";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend Development",
    description: "Developing secure APIs and server-side applications.",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
    ],
  },

  {
    title: "Database & ORM",
    description: "Working with relational and NoSQL data systems.",
    icon: Database,
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },

  {
    title: "Authentication",
    description: "Implementing secure user authentication systems.",
    icon: ShieldCheck,
    technologies: [
      "Better Auth",
      "Custom Authentication",
      "Firebase Authentication",
    ],
  },

  {
    title: "Tools & Workflow",
    description: "Development tools and modern software workflows.",
    icon: Wrench,
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "API Integration",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="
        relative
        w-full
        md:w-[98%]
        lg:w-[98%]
        mx-auto
        min-h-screen
        py-20
        px-4
        overflow-hidden
        text-white
      "
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          top-20
          left-[-150px]
          w-80
          h-80
          rounded-full
          bg-emerald-500/10
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-10
          right-[-150px]
          w-80
          h-80
          rounded-full
          bg-lime-400/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-500/10
              text-emerald-400
              text-sm
              font-medium
              mb-4
            "
          >
            <Sparkles size={16} />
            Technical Skills
          </motion.div>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-extrabold
            "
          >
            My{" "}
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
              Skills
            </span>
          </h2>

          <p
            className="
              mt-5
              text-slate-400
              leading-7
            "
          >
            A collection of technologies and tools I use to build
            modern, responsive, secure, and scalable web
            applications.
          </p>
        </div>

        {/* ================= CATEGORY CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-5
            mb-16
          "
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                  p-6
                  transition-all
                  duration-300
                  hover:border-emerald-400/30
                  hover:bg-emerald-500/[0.04]
                  hover:shadow-xl
                  hover:shadow-emerald-950/20
                "
              >
                {/* Icon */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-xl
                    bg-emerald-500/10
                    border
                    border-emerald-400/20
                    text-emerald-400
                    mb-5
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-400
                    leading-6
                  "
                >
                  {category.description}
                </p>

                {/* Technology tags */}

                <div className="flex flex-wrap gap-2 mt-5">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        px-3
                        py-1.5
                        rounded-lg
                        text-xs
                        font-medium
                        text-slate-300
                        bg-slate-800/70
                        border
                        border-slate-700/70
                        transition-all
                        duration-200
                        hover:text-emerald-300
                        hover:border-emerald-400/30
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= PROFICIENCY ================= */}

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-md
            p-6
            md:p-10
          "
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Technical Proficiency
              </h3>

              <p className="text-sm text-slate-400 mt-2">
                Self-assessed proficiency based on learning,
                practice, and project experience.
              </p>
            </div>

            <span
              className="
                text-xs
                text-emerald-400
                border
                border-emerald-400/20
                bg-emerald-500/10
                px-3
                py-1.5
                rounded-full
                w-fit
              "
            >
              Continuously improving
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
            {tectStack.map((skill, index) => (
              <motion.div
                key={skill.id || index}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            <span className="text-emerald-400">
              Always learning.
            </span>{" "}
            Always building. Always improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;