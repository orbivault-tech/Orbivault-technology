import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ description, title, image, liveLink, gitHubLink, ...rest }) => {
  return (
    <div className="w-full group pt-2 bg-gray-100 border border-gray-300 rounded-xl cursor-default sm:hover:scale-105 sm:hover:shadow-xl group transition duration-500" {...rest}>
      <div className="mx-2 flex justify-center items-center overflow-hidden rounded-t-xl">
        <img src={image} alt={title} className="" />
      </div>
      <div className="p-3">
        <h1 className="text-xl font-light  text-gray-900">{title}</h1>
        <p className="mt-4 text-gray-700 text-xs  pb-4 h-20">{description}</p>
        <div className="flex mt-6 gap-2">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex px-2 items-center text-xs font-medium justify-center w-full py-4  text-gray-900 hover:text-white  rounded-md transition duration-300 bg-greenPrimary bg-opacity-50 hover:bg-opacity-100">
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="flex px-2 items-center text-xs font-medium justify-center w-full py-4  hover:text-white rounded-md transition duration-300 bg-neutralGrey bg-opacity-50 hover:bg-opacity-100">
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
