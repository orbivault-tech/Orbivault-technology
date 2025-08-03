import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import hawksEyeImg from "../../assets/HK.png";
import travelTogetherImg from "../../assets/TR1.png";
import hrPayrollImg from "../../assets/HR.png";

const Projects = ({ id }) => {
  return (
    <section className="pt-1" id={id}>
      <div className="mx-auto max-w-[1900px]">
        <div className="lg:mx-20 md:mx-12 mx-6">
          <div className="md:mt-32 mt-24 text-center">
            <h1
              className="text-neutralGrey md:text-xl font-bold"
              data-aos="fade-right"
              data-aos-duration="900"
            >
              {/* optional subtitle */}
            </h1>
            <h1
              className="text-black mt-8 md:text-5xl text-3xl font-bold"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              Our Projects
            </h1>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:mt-28 mt-16 mb-28 gap-6"
          >
            {/* Hawk's Eye AI */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <ProjectCard
                title="Hawk's Eye AI"
                description={
                  <>
                    An AI-driven security platform that connects to CCTV feeds to
                    perform real-time facial recognition and behavioral analysis.
                    It logs every visitor, flags suspicious activity, and
                    automatically notifies local authorities on detection of
                    potential threats—greatly reducing response times.
                  </>
                }
                image={hawksEyeImg}
                liveLink="https://hawks-eye.onrender.com/"
                gitHubLink="https://github.com/Muhammed-nafih/hawk-s-eye"
              />
            </div>

            {/* Travel Together */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <ProjectCard
                title="Travel Together"
                description={
                  <>
                    A community-powered travel network where adventurers can
                    create or join group trips based on shared interests and
                    destinations. Features include user profiling, itinerary
                    sharing, in-app chat, and collaborative planning tools to
                    make group travel seamless and social.
                  </>
                }
                image={travelTogetherImg}
                liveLink="https://travel-together.onrender.com/"
                gitHubLink="https://github.com/Muhammed-nafih/travel-together"
              />
            </div>

            {/* HR Payroll */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <ProjectCard
                title="HR Payroll"
                description={
                  <>
                    A payroll management solution fully compliant with UAE labor
                    regulations, automating salary, allowances, overtime, and
                    end-of-service benefits. It generates payslips,
                    GOSI/MOL compliance reports, and custom payroll analytics to
                    streamline HR operations.
                  </>
                }
                image={hrPayrollImg}
                liveLink="https://hrpayroll.onrender.com/"
                gitHubLink="https://github.com/Muhammed-nafih/HR-Payroll"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
