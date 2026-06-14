import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  let scrollTimer = null;
  useEffect(()=>{
    const handleScroll = () =>{
        setShowNavbar(false);

        if(scrollTimer){
          clearTimeout(scrollTimer);
        }

        scrollTimer = setTimeout(()=>{
          setShowNavbar(true);
        }, 300)
      };

      window.addEventListener("scroll", handleScroll);
      return ()=>{
        window.removeEventListener("scroll", handleScroll);
        if(scrollTimer) clearTimeout(scrollTimer);
      };
  },[])
  return (
    <div className={`navbar shadow-slate-300 px-4 w-full md:w-full lg:w-[58%] border border-t-0 rounded-full mx-auto bg-white/60 text-black sticky inset-0 z-1 transition-transform duration-300 ${showNavbar? "translate-y-0":"-translate-y-full"}`}>
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-black/30  text-amber-400 rounded-box w-52"
          >
            <li className="hover:bg-base-100"><a>Home</a></li>
            <li className="hover:bg-base-100"><a>About</a></li>
            <li className="hover:bg-base-100"><a>Projects</a></li>
            <li className="hover:bg-base-100"><a>Contact</a></li>
            <li className="mt-2">
              <a className="btn btn-sm btn-outline">Login</a>
            </li>
            <li>
              <a className="btn btn-sm btn-primary text-white">Sign Up</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold">
          <span className="text-slate-500">M</span>trk<span className="text-primary">.</span>
        </a>
      </div>

      {/* Center menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li className="hover:scale-110 hover:bg-green-200"><a>Home</a></li>
          <li className="hover:scale-110 hover:bg-green-200"><a>About</a></li>
          <li className="hover:scale-110 hover:bg-green-200"><a>Projects</a></li>
          <li className="hover:scale-110 hover:bg-green-200"><a>Contact</a></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end hidden lg:flex gap-2">
        
      </div>
    </div>
  );
};

export default Navbar;
