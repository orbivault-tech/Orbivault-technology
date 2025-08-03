import React from "react";
import banner_image from "../../../assets/orbabout.jpg";
import AboutCard from "./AboutCard";

const AboutMe = ({ id }) => {
  return (
    <section className="pt-1" id={id}>
      <div className="mx-auto max-w-[1900px]">
        <div
          className="mt-24 text-center"
          data-aos="fade-in"
          data-aos-duration="900"
          data-aos-delay="400"
        >
          <img
            src={banner_image}
            alt="Team banner"
            className="mx-auto w-8/12 sm:w-6/12 md:hidden rounded-xl"
          />
          <h1
            className="mt-8 md:text-5xl text-black text-3xl font-bold"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            About Us
          </h1>
        </div>

        <div className="lg:mx-20 md:mx-12 mx-6 flex flex-col md:flex-row items-start md:mt-20 mt-6">
          <div
            className="hidden md:block w-4/12 max-w-md overflow-hidden mt-24 md:mt-0"
            data-aos="fade-in"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            <img
              src={banner_image}
              alt="Team banner"
              className="rounded-xl"
            />
          </div>
          <div
            className="md:ml-14 md:w-7/12 xl:w-7/12"
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-duration="900"
          >
            <p className="mt-7 leading-7 font-[400] text-neutralDGrey text-justify md:text-start">
              Orbivault Technologies is a freelance-based tech initiative delivering custom software solutions, artificial intelligence, data science, and enterprise-grade system integrations. Whether you're building a new platform from scratch or modernizing an existing system, our mission is to deliver next-level intelligence for business.

We are currently not a registered company, but operate as a virtual tech team, collaborating with startups, software firms, and agencies to deliver high-quality projects across the Middle East and beyond. Our lean, remote-first model allows us to work with agility, efficiency, and cost-effectiveness — without compromising on quality or reliability.
            </p>
          </div>
        </div>

        {/* Co-founders */}
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-8 xl:mx-52 md:mx-16 mx-6">
          <AboutCard
            topic="Muhammed Nafih"
            role="Co-founder & Software Engineer"
            description="A passionate software engineer working in Dubai, UAE, Muhammed brings hands-on experience in Python development, web technologies, ERP systems (Odoo & Dynamics 365), and DevOps. He has a strong foundation in data science and machine learning and is committed to applying cutting-edge technologies to solve real-world business challenges."
            link="https://www.linkedin.com/in/muhammed-nafih-stp/"
          />
          <AboutCard
            topic="Asif S"
            role="Co-founder & Software Engineer"
            description="A dedicated software professional working in Bangalore, India, with expertise in data science, AI, NLP, and full-stack development. Asif brings practical experience in predictive modeling, data visualization (Power BI, Tableau), Python, machine learning, and AWS cloud services, and is passionate about crafting data-driven solutions using emerging AI techniques."
            link="https://www.linkedin.com/in/asif-your-profile/"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
