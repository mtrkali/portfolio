import {
  Mail,
  Send,
  MapPin,
  ArrowUpRight,
  GitBranch,
} from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="relative w-[98%] mx-auto overflow-hidden bg-black py-20 text-white"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Get In Touch
          </span>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
            Have a project idea, collaboration opportunity or development
            requirement? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">
              Let's talk
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              I am open to discussing web development projects, freelance
              opportunities and professional collaborations.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-500/30 hover:bg-emerald-500/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="text-sm text-gray-300 group-hover:text-emerald-400">
                    your-email@example.com
                  </p>
                </div>

                <ArrowUpRight
                  size={16}
                  className="ml-auto text-gray-600 transition group-hover:text-emerald-400"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="text-sm text-gray-300">
                    Feni, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              <a
                href="YOUR_GITHUB_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-emerald-500/30 hover:bg-emerald-500 hover:text-black"
              >
                <GitBranch size={19} />
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-emerald-500/30 hover:bg-emerald-500 hover:text-black"
              >
                <LiaLinkedin size={19} />
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-xs font-medium text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-500/50"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                Send Message
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;