import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "../../../context/ThemeToggle";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setShowNavbar(false);

      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setShowNavbar(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  // Close mobile menu when clicking a navigation item
  const handleNavigation = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed
        top-3
        left-1/2
        -translate-x-1/2
        z-50

        w-[95%]
        sm:w-[92%]
        md:w-[85%]
        lg:w-[75%]
        xl:w-[65%]

        transition-all
        duration-500
        ease-out

        ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-[140%] opacity-0"
        }
      `}
    >
      <nav
        className="
          relative
          w-full
          rounded-2xl
          border
          border-slate-200/60
          dark:border-white/10

          bg-white/75
          dark:bg-slate-950/75

          backdrop-blur-xl

          shadow-lg
          shadow-slate-900/5
          dark:shadow-black/20

          px-3
          sm:px-4
          lg:px-5
        "
      >
        {/* ================= MAIN NAVBAR ================= */}
        <div className="flex h-16 items-center justify-between">
          {/* ================= LOGO ================= */}
          <a
            href="#home"
            onClick={handleNavigation}
            className="
              group
              flex
              items-center
              gap-2
              shrink-0
            "
          >
            {/* Logo Icon */}
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl

                bg-gradient-to-br
                from-violet-500
                to-cyan-500

                text-white

                shadow-md
                shadow-violet-500/20

                transition-transform
                duration-300

                group-hover:rotate-6
                group-hover:scale-105
              "
            >
              <Code2 size={19} />
            </div>

            {/* Logo Text */}
            <div className="text-xl font-extrabold tracking-tight">
              <span className="text-slate-700 dark:text-slate-200">
                Mtrk
              </span>

              <span className="text-violet-500">.</span>
            </div>
          </a>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden lg:flex items-center">
            <ul
              className="
                flex
                items-center
                gap-1
                rounded-xl
                border
                border-slate-200/60
                dark:border-white/5

                bg-slate-100/60
                dark:bg-white/5

                p-1
              "
            >
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      relative
                      block
                      rounded-lg
                      px-4
                      py-2

                      text-sm
                      font-medium

                      text-slate-600
                      dark:text-slate-300

                      transition-all
                      duration-300

                      hover:bg-white
                      dark:hover:bg-white/10

                      hover:text-violet-600
                      dark:hover:text-violet-400

                      hover:shadow-sm
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <div
              className="
                hidden
                sm:flex
                items-center
                justify-center
                h-10
                w-10
                rounded-xl

                border
                border-slate-200
                dark:border-white/10

                bg-slate-100/60
                dark:bg-white/5

                transition-all
                duration-300

                hover:border-violet-400/50
              "
            >
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="
                lg:hidden

                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-xl

                border
                border-slate-200
                dark:border-white/10

                bg-slate-100/70
                dark:bg-white/5

                text-slate-700
                dark:text-slate-200

                transition-all
                duration-300

                hover:border-violet-400/50
                hover:text-violet-500
              "
            >
              {mobileMenuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-out

            ${
              mobileMenuOpen
                ? "max-h-[500px] opacity-100 pb-4"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-slate-200/70
              dark:border-white/10

              bg-slate-50/80
              dark:bg-slate-900/80

              p-2
              shadow-inner
            "
          >
            <div className="flex flex-col gap-1">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleNavigation}
                  className="
                    rounded-xl
                    px-4
                    py-3

                    text-sm
                    font-medium

                    text-slate-700
                    dark:text-slate-200

                    transition-all
                    duration-200

                    hover:bg-violet-500/10
                    hover:text-violet-600
                    dark:hover:text-violet-400

                    active:scale-[0.98]
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Theme */}
            <div
              className="
                mt-2
                flex
                items-center
                justify-between

                rounded-xl

                border
                border-slate-200
                dark:border-white/10

                px-4
                py-3

                bg-white/60
                dark:bg-white/5
              "
            >
              <span
                className="
                  text-sm
                  font-medium
                  text-slate-600
                  dark:text-slate-300
                "
              >
                Appearance
              </span>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;