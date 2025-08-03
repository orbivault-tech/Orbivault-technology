import React from "react";
import ServiceCard from "./SkillCard"; // you can rename SkillCard → ServiceCard if you prefer

const services = [
  {
    title: "💻 Custom Software Development",
    description:
      "We build high-performance web, mobile, and desktop applications using modern technologies like Python, Django, React, and Flutter — tailored to your unique business needs.",
    items: [
      "Web applications (SaaS, dashboards, admin panels)",
      "Mobile apps (cross-platform or native)",
      "Startup MVPs & prototypes",
      "Business process tools",
    ],
  },
  {
    title: "🧠 Artificial Intelligence & Machine Learning",
    description:
      "We develop and integrate AI solutions that enable businesses to automate, predict, and optimize.",
    items: [
      "ML models for prediction, classification, and segmentation",
      "NLP solutions (chatbots, text analytics, language models)",
      "AI-powered process automation",
      "Computer vision & intelligent recommendation systems",
    ],
  },
  {
    title: "📊 Data Science & Analytics",
    description:
      "Turn your raw data into powerful insights with our data science and BI services.",
    items: [
      "Data cleaning, modeling & visualization",
      "Business dashboards (Power BI, Streamlit, Dash)",
      "Reporting automation",
      "Predictive analytics for sales, customer behavior, etc.",
    ],
  },
  {
    title: "🧩 ERP & CRM Customization",
    description:
      "We help businesses get more out of their ERP/CRM systems through tailored customization, automation, and integration.",
    items: [
      "Odoo, Zoho CRM, and Microsoft Dynamics 365 extensions",
      "Workflow customization & business module development",
      "Report customization & analytics integration",
      "VAT-compliant and Arabic-English interfaces",
    ],
  },
  {
    title: "🔗 API Development & Integration",
    description:
      "We design and build robust APIs to connect systems, automate workflows, and support scalable architectures.",
    items: [
      "RESTful and GraphQL APIs",
      "Microservices architecture",
      "Third-party integrations (payment, CRM, ERP, etc.)",
      "API documentation and testing",
    ],
  },
  {
    title: "☁️ Cloud Deployment & DevOps",
    description:
      "We help you launch and scale securely on the cloud.",
    items: [
      "Cloud hosting (AWS, GCP, Azure, DigitalOcean)",
      "Dockerization & CI/CD setup",
      "Scalable backend deployment",
      "Serverless architecture consulting",
    ],
  },
];

const Skills = ({ id }) => {
  return (
    <section className="overflow-hidden" id={id}>
      <div className="mx-auto max-w-[1900px]">
        <div className="text-center">
          <h1
            className="text-neutralGrey md:text-xl mt-12 font-bold"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            Explore Our
          </h1>
          <h1
            className="mt-8 md:text-5xl text-black text-3xl font-bold"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            Services
          </h1>
        </div>

        <div className="pb-16 mt-24 grid md:grid-cols-2 grid-cols-1 gap-8 xl:mx-52 md:mx-16 mx-3 sm:mx-2">
          {services.map((svc) => (
            <div
              key={svc.title}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              <ServiceCard
                title={svc.title}
                description={svc.description}
                items={svc.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
