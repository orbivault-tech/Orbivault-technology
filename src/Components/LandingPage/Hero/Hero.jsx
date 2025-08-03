import React from "react";
import { Typewriter } from "react-simple-typewriter";
import banner_img from "../../../assets/nafi1.jpg";
import cv from "../../../assets/NAFIHRESUME.pdf";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = ({ id }) => {
  const handleDone = () => {};
  const handleType = () => {};

  return (
    <section className="overflow-hidden" id={id}>
      <div className="md:mx-10 pl-1 flex xl:gap-24 md:gap-12 flex-col md:flex-row items-center pt-12 md:pt-16 pb-12 justify-center">
        
        {/* Text container */}
        <div className="sm:mx-6 max-w-[37rem] md:max-w-none pb-9 md:order-1 order-2 md:mt-24 mt-4 mx-4 md:mx-0 lg:mx-0">
          
          <h1
            className="md:text-xl text-neutralDGrey text-center md:text-start"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="700"
          >
            {/* intro text if any */}
          </h1>
          
          <h1
            className="md:text-4xl font-bold text-xl mt-2 text-neutralDGrey text-center md:text-start"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="700"
          >
            Welcome To
          </h1>
          
          <h1
            className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl mt-2 text-neutralSilver text-center md:text-start xl:w-auto"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="700"
          >
            <span className="text-black font-semibold whitespace-nowrap inline-block">
              <Typewriter
                words={["ORBIVAULT TECHNOLOGY"]}
                loop={2}
                cursor
                cursorStyle="|"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
          
          <p
            className="text-neutralGrey text-sm mt-6 text-center md:text-start"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="900"
          >
            "Next-level intelligence for business."
          </p>
          
          <div className="flex justify-center md:justify-start mt-4 gap-4">
            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="900"
            >
              {/* extra button if needed */}
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1700"
              data-aos-duration="900"
            >
              <Link
                className="px-6 flex justify-center items-center py-4 text-xs md:text-sm bg-white hover:bg-neutralDGrey hover:text-white border border-neutralDGrey transition duration-500 text-neutralDGrey rounded mt-6"
                to="contact-me"
                smooth
                duration={800}
                spy
              >
                <IoIosContact className="text-xl mr-2" />
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="flex mt-10 gap-5">
              {/* <a
                data-aos="fade-left"
                data-aos-delay="1900"
                data-aos-duration="900"
                href="https://www.linkedin.com/in/muhammed-nafih-stp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-black border p-2 rounded-full hover:bg-greenPrimary hover:text-white transition duration-300">
                  <TfiLinkedin />
                </div>
              </a> */}
              <a
                href="https://github.com/Muhammed-nafih"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-left"
                data-aos-delay="2100"
                data-aos-duration="900"
              >
                <div className="text-black border p-2 rounded-full hover:bg-greenPrimary hover:text-white transition duration-300">
                  <TbBrandGithubFilled />
                </div>
              </a>
              <a
                href="mailto:info@orbivault.com"
                data-aos="fade-left"
                data-aos-delay="2300"
                data-aos-duration="900"
              >
                <div className="text-black border p-2 rounded-full hover:bg-greenPrimary hover:text-white transition duration-300">
                  <GrMail />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Image container */}
        <div
          data-aos="fade"
          data-aos-delay="900"
          data-aos-duration="1500"
          className="home_img mt-10 md:mt-0 min-w-[18.75rem] md:-ml-16"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
