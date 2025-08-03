import React, { useState, useEffect } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link, scrollSpy } from "react-scroll";
import logo from "../../../assets/logoorb.png";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navItems = [
    { name: "Home", link: "hero" },
    { name: "About Us", link: "about-me" },
    { name: "Services", link: "skills" },
    { name: "Projects", link: "projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed w-full top-0 z-50
        transition-colors duration-300
        ${scrolling ? "bg-[#7fd582]" : "bg-transparent"}
      `}
    >
      <nav className="mx-auto max-w-[1900px] lg:h-20 h-12 sm:h-16 py-2 md:px-8 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={800}
          spy
          className="cursor-pointer flex items-center"
        >
          <img src={logo} alt="Orbivault Logo" className="h-12 md:h-16 lg:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex md:space-x-7 lg:space-x-12 text-md text-neutralDGrey">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative hover:text-green-500 px-1.5 pb-1 transition duration-300 cursor-pointer"
              >
                <Link to={item.link} smooth duration={800} spy activeClass="active-link">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-neutralDGrey">
          <button onClick={() => setOpenNav(!openNav)} className="text-xl">
            {openNav ? <IoMdClose /> : <FiAlignRight />}
          </button>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            to="contact-me"
            smooth
            duration={800}
            spy
            className="border border-green-500 text-neutralDGrey text-sm px-8 py-3 rounded hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed top-0 mt-12 left-0 w-full bg-white z-50
          transition-all duration-500
          ${openNav ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div className="flex flex-col items-center pb-4">
          <ul className="w-full text-center">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="text-neutralDGrey text-md py-3 hover:text-green-500 transition duration-300 cursor-pointer"
              >
                <Link
                  to={item.link}
                  smooth
                  duration={500}
                  spy
                  activeClass="active-link"
                  onClick={() => setOpenNav(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Link
              to="contact-me"
              smooth
              duration={800}
              spy
              onClick={() => setOpenNav(false)}
              className="border border-green-500 text-neutralDGrey text-sm px-5 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
