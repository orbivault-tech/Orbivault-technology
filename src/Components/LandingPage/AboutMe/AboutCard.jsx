import React from "react";
import { FaLinkedin } from "react-icons/fa";

const AboutCard = ({ topic, role, description, link }) => {
  return (
    <div className="border bg-white border-gray-500 rounded-3xl p-6 flex flex-col items-center text-center">
      <h4 className="font-semibold mb-1 text-xl text-neutralDGrey">{topic}</h4>
      <p className="text-greenPrimary font-medium mb-4">{role}</p>
      <p className="text-neutralGrey mb-6 leading-relaxed">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-greenPrimary hover:text-green-600 transition"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default AboutCard;
