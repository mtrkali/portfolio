const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "FoodHub - Full Stack Meal Ordering Platform",
      status: "Running",
      type: "Full Stack",
      description:
        "Role-based full stack meal ordering platform with Customer, Provider & Admin dashboards. Includes authentication, meal browsing, cart system, and MVC-based REST API.",
      image: "https://via.placeholder.com/800x500",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      live: "food-hub-client-pepg1mf5v-mtrkalis-projects.vercel.app",
      github_client: "https://github.com/mtrkali/FoodHubClient",
      github_server: "https://github.com/mtrkali/FoodhubServer",
    },
    {
      id: 2,
      title: "Portfolio Website",
      status: "In Progress",
      type: "Frontend",
      description:
        "Modern responsive portfolio website to showcase projects, technical skills and professional background with continuous improvements.",
      image: "https://via.placeholder.com/800x500",
      tech: ["React", "Tailwind CSS"],
      live: "https://portfolio-seven-phi-wrla0byx1l.vercel.app/",
      github_client: "https://github.com/mtrkali/portfolio",
      github_server: "#",
    },
    {
      id: 3,
      title: "Garden Management System",
      status: "Completed",
      type: "Full Stack",
      description:
        "Real-time garden management system with authentication, role-based access and CRUD operations using Firebase.",
      image: "https://via.placeholder.com/800x500",
      tech: ["React", "Firebase"],
      live: "https://garden-client-f1349.web.app/",
      github_client: "https://github.com/mtrkali/garden-client",
      github_server: "https://github.com/mtrkali/garden-server",
    },
    {
      id: 4,
      title: "Food Expiry Tracker",
      status: "Completed",
      type: "Frontend + Auth",
      description:
        "Food expiry tracking system with protected routes, authentication, and efficient CRUD operations for managing food items.",
      image: "https://via.placeholder.com/800x500",
      tech: ["React", "Firebase"],
      live: "https://dragon-news-breaking-b60e1.web.app/",
      github_client: "https://github.com/mtrkali/food-expiry-client",
      github_server: "https://github.com/mtrkali/expiry-server",
    },
    {
      id: 5,
      title: "Sports Club Management System",
      status: "Completed",
      type: "Frontend + Auth",
      description:
        "Club management system with Firebase authentication, user-specific data handling, and structured form validation.",
      image: "https://via.placeholder.com/800x500",
      tech: ["React", "Firebase"],
      live: "https://simple-firebase-auth-c3104.web.app/",
      github_client: "https://github.com/mtrkali/sports-client",
      github_server: "https://github.com/mtrkali/sports-server",
    },
  ];

  return (
    <section
      data-aos="zoom-in"
      className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            A selection of projects I’ve designed and developed
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition duration-300 shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Badges */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {project.status}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-xs font-medium transition"
                  >
                    Live
                  </a>

                  <a
                    href={project.github_client}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-lg border border-white/20 hover:bg-white/10 text-xs transition"
                  >
                    Client
                  </a>

                  <a
                    href={project.github_server}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-lg border border-white/20 hover:bg-white/10 text-xs transition"
                  >
                    Server
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
