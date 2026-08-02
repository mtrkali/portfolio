import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Sahared/Navbar/Navbar";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Skills from "../Pages/Home/Skills/Skills";
import Aos from "aos";
import Footer from "../Pages/Home/Footer/Footer";
import ScrollTop from "../Pages/Sahared/ScrollTop";
import { ProjectMain } from "../Pages/Home/Projects/ProjectMain";

const RootLayouts = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 120,
    });
  }, []);
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <ProjectMain />
      <Footer></Footer>
      <ScrollTop />
    </div>
  );
};

export default RootLayouts;
