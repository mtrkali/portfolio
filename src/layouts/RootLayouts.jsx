import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Sahared/Navbar/Navbar";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Skills from "../Pages/Home/Skills/Skills";
import Aos from "aos";
import Projects from "../Pages/Home/Projects/Projects";
import Footer from "../Pages/Home/Footer/Footer";

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
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
