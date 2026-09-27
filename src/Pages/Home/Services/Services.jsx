import {
  MonitorSmartphone,
  Server,
  Database,
  ShieldCheck,
  Code2,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    description:
      "Modern, responsive and user-friendly interfaces using React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "REST APIs and server-side applications using Node.js and Express.js with clean architecture.",
  },
  {
    icon: Database,
    title: "Database Integration",
    description:
      "Database-driven applications using MongoDB, PostgreSQL and Prisma ORM.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & RBAC",
    description:
      "Secure authentication and role-based authorization using Better Auth, Firebase and custom solutions.",
  },
  {
    icon: Code2,
    title: "API Integration",
    description:
      "Connecting frontend applications with REST APIs and third-party services.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Complete web applications combining frontend, backend, database and authentication.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      data-aos="fade-up"
      className="relative w-[98%] mx-auto overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black py-20 text-white"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            What I Do
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Services I{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
              Provide
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            I build modern web solutions from user interface to backend
            architecture and database integration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400 transition duration-300 group-hover:bg-emerald-500 group-hover:text-black">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;