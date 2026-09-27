import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  TestTube,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the requirements, goals and expected user experience.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Break the project into features, components, APIs and development tasks.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create a clean, responsive and user-focused interface.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Build frontend, backend, database and authentication features.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Test",
    description:
      "Test functionality, responsiveness and fix issues before deployment.",
    icon: TestTube,
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "Deploy the application and keep improving it based on real usage.",
    icon: Rocket,
  },
];

const HowIWork = () => {
  return (
    <section
      id="workflow"
      data-aos="fade-up"
      className="w-[98%] mx-auto bg-black py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            My Process
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            How I{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            A simple development workflow that helps me stay organized and
            focused on building reliable applications.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-emerald-500/30"
              >
                {/* Number */}
                <span className="absolute right-5 top-4 text-4xl font-black text-white/[0.04]">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition duration-300 group-hover:bg-emerald-500 group-hover:text-black">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {step.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;