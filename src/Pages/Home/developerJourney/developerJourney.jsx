import {
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2018",
    title: "Started My Education Journey",
    description:
      "Completed SSC in Science and started building my academic foundation.",
    icon: GraduationCap,
  },
  {
    year: "2020",
    title: "Completed HSC",
    description:
      "Completed HSC in Science and continued developing my interest in technology.",
    icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Started Computer Science",
    description:
      "Started my Diploma in Computer Science & Technology and began exploring programming.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Focused on frontend development with HTML, CSS, JavaScript, React and modern UI technologies.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Moved Into Full-Stack Development",
    description:
      "Started working with Node.js, Express.js, databases, authentication and REST APIs.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2026",
    title: "Building Real-World Applications",
    description:
      "Now focused on building complete, scalable and production-ready web applications.",
    icon: Rocket,
  },
];

const DeveloperJourney = () => {
  return (
    <section
      id="journey"
      data-aos="fade-up"
      className="relative w-[98%] mx-auto overflow-hidden bg-black py-20 text-white"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            My Journey
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            From Learning to{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
              Building
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            A continuous journey of learning, practicing and turning knowledge
            into real-world applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex items-center md:w-1/2 ${
                    isRight
                      ? "md:ml-auto md:pl-12"
                      : "md:pr-12"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-emerald-400/30 bg-slate-950 text-emerald-400 shadow-lg shadow-emerald-500/10 md:left-auto md:right-0 md:translate-x-1/2">
                    <Icon size={17} />
                  </div>

                  {/* Card */}
                  <div className="ml-12 w-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-emerald-500/[0.03] md:ml-0">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-sm font-bold text-emerald-400">
                        {item.year}
                      </span>

                      <ChevronRight
                        size={16}
                        className="text-gray-600"
                      />
                    </div>

                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperJourney;