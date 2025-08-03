// ContactCard.jsx (no changes needed)
import React, { useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const ContactCard = ({ appName, contactThrough, icon, toLink }) => {
  const [hovered, setHovered] = useState(false);

  const handleLinkClick = (e) => {
    if (toLink.startsWith("mailto:")) {
      e.preventDefault();
      window.location.href = toLink;
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg sm:min-w-80 max-w-96 bg-gray-100 px-4 py-4">
      <div className="flex justify-center mb-2 text-xl text-greenPrimary">
        {icon}
      </div>
      <h4 className="font-bold text-sm mb-2">{appName}</h4>
      <p className="text-sm mb-2 font-light text-center text-neutralGrey">
        {contactThrough}
      </p>
      <a
        href={toLink}
        onClick={handleLinkClick}
        className="flex items-center justify-center text-neutralDGrey text-sm gap-x-1 hover:text-greenPrimary"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Write Me
        <HiArrowSmallRight
          className="transition duration-300"
          style={{ transform: hovered ? "translateX(6px)" : "translateX(0)" }}
        />
      </a>
    </div>
  );
};

export default ContactCard;
