import "swiper/css";
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../../../constants/projectsData";
import ProjectCard from "./projectCard";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const ProjectMain = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="w-[98%] mx-auto bg-gradient-to-b from-black via-gray-950 to-black text-white pb-6"
    >
      <div className=" p-3">
        {/* Header */}
        <div className="mb-12 flex justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              A selection of projects I’ve designed and developed
            </p>
          </div>

          <div className="flex gap-2 items-center ">
            <button
              ref={prevRef}
              className="flex h-12 w-12 items-center justify-center rounded-full border shadow transition hover:bg-green-600 hover:text-white"
            >
              <FiChevronLeft size={22} />
            </button>

            <button
              ref={nextRef}
              className="flex h-12 w-12 items-center justify-center rounded-full border shadow transition hover:bg-green-600 hover:text-white"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="">

          <div className="relative">

            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              speed={700}
              spaceBetween={34}
              autoplay={{
                delay: 1500,
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
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 3
                }

              }}
            >

              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard key={index} project={project} />
                </SwiperSlide>
              ))}

            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectMain;
