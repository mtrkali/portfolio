import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react";

import { projects } from "../../../constants/projectsData";
import ProjectCard from "./projectCard";

export const ProjectMain = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="relative w-[98%] mx-auto overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black text-white py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          
          {/* Heading */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                My Work
              </span>

              <FolderGit2 size={16} className="text-emerald-400" />
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
              A collection of web applications I have designed and developed
              using modern frontend, backend, database, and authentication
              technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              aria-label="Previous project"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500 hover:text-black hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <FiChevronLeft
                size={22}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              ref={nextRef}
              aria-label="Next project"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500 hover:text-black hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <FiChevronRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        {/* ================= PROJECT SLIDER ================= */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={projects.length > 3}
            speed={750}
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.3,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id || index} className="h-auto">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom Indicator */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Sparkles size={14} className="text-emerald-400" />

          <span>
            Explore my projects and see what I have been building.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectMain;