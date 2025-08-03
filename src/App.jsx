import React, { useState, useEffect } from "react";
import "./App.css";
import AOSWrapper from "./Components/AOSWrapper";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/LandingPage/Skills/Skills";
import NavBar from "./Components/Layout/NavBar/NavBar";
import ParticlesComponent from "./Components/Particles";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import AboutMe from "./Components/LandingPage/AboutMe/AboutMe";
import ContactMe from "./Components/LandingPage/ContactMe/ContactMe";
import Hero from "./Components/LandingPage/Hero/Hero";
import { Link } from "react-scroll";
import { MdKeyboardArrowUp } from "react-icons/md";
function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ParticlesComponent id="particles" />
      <NavBar />
      <AOSWrapper>
        <Hero id="hero" />
        <AboutMe id="about-me" />
        <Skills id="skills" />
        <Projects id="projects" />
        <ContactMe id="contact-me" />
        <Footer />
        {showScroll && (
          <Link
            className="z-40 fixed bottom-10 cursor-pointer right-5 bg-gray-700 bg-opacity-60 hover:bg-opacity-100 rounded-full transition duration-300 text-white text-4xl"
            to="hero"
            smooth={true}
            duration={800}
            spy={true}
            data-aos="fade-in"
            data-aos-duration="700"
          >
            <MdKeyboardArrowUp />
          </Link>
        )}
      </AOSWrapper>
    </>
  );
}

export default App;
