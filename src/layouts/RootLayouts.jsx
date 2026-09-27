import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Sahared/Navbar/Navbar";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Skills from "../Pages/Home/Skills/Skills";
import Aos from "aos";
import Footer from "../Pages/Home/Footer/Footer";
import ScrollTop from "../Pages/Sahared/ScrollTop";
import { ProjectMain } from "../Pages/Home/Projects/ProjectMain";
import DeveloperJourney from "../Pages/Home/developerJourney/developerJourney";
import Services from "../Pages/Home/Services/Services";
import HowIWork from "../Pages/Home/HowIWork/HowIWork";
import WhyWorkWithMe from "../Pages/Home/WhyWorkWithMe/WhyWorkWithMe";
import Contact from "../Pages/Home/Contact/Contact";

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
      <DeveloperJourney />
      <Services />

<HowIWork />

<WhyWorkWithMe />

<Contact />

      <Footer></Footer>
      <ScrollTop />
    </div>
  );
};

export default RootLayouts;
