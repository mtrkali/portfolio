import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Muhammad Tarak</h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              MERN Stack Developer focused on building modern, responsive and
              high-quality web applications.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-cyan-400 transition"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <HiOutlineMail />
                <span>your@email.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-5">
          <a
            href="https://github.com/mtrkali"
            target="_blank"
            className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            className="p-3 rounded-full bg-white/5 hover:bg-blue-500 hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:your@email.com"
            className="p-3 rounded-full bg-white/5 hover:bg-red-500 hover:text-white transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t border-white/10 pt-5">
          © {new Date().getFullYear()} Muhammad Tarak. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
