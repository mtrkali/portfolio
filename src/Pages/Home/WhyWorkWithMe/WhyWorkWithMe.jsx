import {
  Code2,
  Smartphone,
  GitBranch,
  ShieldCheck,
  Gauge,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I focus on readable, organized and maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Interfaces are designed to work across mobile, tablet and desktop.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub",
    description:
      "I use Git and GitHub to manage source code and development workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:
      "Experience with authentication, authorization and role-based access control.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description:
      "I pay attention to efficient rendering, API usage and overall user experience.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "I continuously learn new technologies and improve through real projects.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section
      id="why-me"
      data-aos="fade-up"
      className="relative w-[98%] mx-auto overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-20 text-white"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
              Why Me
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Focused on{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
                Quality
              </span>
              , Learning & Growth
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
              I am a developer who enjoys learning by building. My goal is to
              create useful, maintainable and user-friendly applications while
              continuously improving my development skills.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-sm text-gray-300">
                Always learning. Always building.
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition duration-300 group-hover:bg-emerald-500 group-hover:text-black">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;