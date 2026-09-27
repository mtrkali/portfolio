import {
  ArrowUpRight,
  ExternalLink,
  GitBranch ,
  Server,
} from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article
      className="
        group relative flex h-full min-h-[540px] flex-col
        overflow-hidden rounded-3xl
        border border-white/10
        bg-white/[0.035]
        backdrop-blur-xl
        shadow-xl shadow-black/20
        transition-all duration-500
        hover:-translate-y-2
        hover:border-emerald-500/30
        hover:shadow-2xl
        hover:shadow-emerald-500/10
      "
    >
      {/* ================= LATEST BADGE ================= */}
      {project.isLatest && (
        <div className="absolute left-4 top-4 z-20">
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-lg shadow-emerald-500/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
            Latest Project
          </div>
        </div>
      )}

      {/* ================= IMAGE ================= */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-emerald-500/0 transition duration-500 group-hover:bg-emerald-500/5" />

        {/* Project Icon */}
        <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-emerald-400 backdrop-blur-md">
          <ExternalLink size={18} />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* Status + Type */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400">
            {project.status}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-400">
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 min-h-[56px] text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-emerald-400">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 min-h-[72px] line-clamp-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* ================= TECH STACK ================= */}
        <div className="mt-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
            Technologies
          </p>

          <div className="flex min-h-[58px] flex-wrap content-start gap-2">
            {project.tech.map((technology, index) => (
              <span
                key={index}
                className="
                  rounded-lg
                  border border-white/10
                  bg-white/5
                  px-2.5 py-1.5
                  text-[11px]
                  text-gray-300
                  transition-all duration-300
                  hover:border-emerald-400/30
                  hover:bg-emerald-500/10
                  hover:text-emerald-300
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-auto flex gap-2 pt-6">
          {/* Live */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/btn
                flex flex-1 items-center justify-center gap-1.5
                rounded-xl
                bg-emerald-500
                py-2.5
                text-xs font-semibold
                text-black
                transition-all duration-300
                hover:bg-emerald-400
                hover:shadow-lg
                hover:shadow-emerald-500/20
              "
            >
              Live
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
              />
            </a>
          )}

          {/* Client */}
          {project.github_client && (
            <a
              href={project.github_client}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex flex-1 items-center justify-center gap-1.5
                rounded-xl
                border border-white/10
                bg-white/5
                py-2.5
                text-xs font-medium
                text-gray-300
                transition-all duration-300
                hover:border-emerald-400/30
                hover:bg-emerald-500/10
                hover:text-emerald-300
              "
            >
              <GitBranch  size={14} />
              Client
            </a>
          )}

          {/* Server */}
          {project.github_server && (
            <a
              href={project.github_server}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex flex-1 items-center justify-center gap-1.5
                rounded-xl
                border border-white/10
                bg-white/5
                py-2.5
                text-xs font-medium
                text-gray-300
                transition-all duration-300
                hover:border-emerald-400/30
                hover:bg-emerald-500/10
                hover:text-emerald-300
              "
            >
              <Server size={14} />
              Server
            </a>
          )}
        </div>
      </div>

      {/* Bottom Green Accent */}
      <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-all duration-500 group-hover:w-3/4" />
    </article>
  );
}