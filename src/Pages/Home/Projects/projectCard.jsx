export default function ProjectCard ({project}) {
    
    return (
        <div
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition duration-300 shadow-lg"
            >
              {project.isLatest &&
              <div className="absolute -top-2 -left-2 z-50">
                <p className=" px-6 py-1 rounded-full bg-amber-500 animate animate-pulse">latest</p>
              </div>}
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
                <h3 className="text-lg font-semibold leading-snug h-13">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-3 line-clamp-3 overflow-y-auto min-h-20">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4 border h-7 overflow-x-auto">
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
    )
}