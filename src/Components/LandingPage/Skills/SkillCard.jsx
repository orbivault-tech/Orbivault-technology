import React from "react";

const SkillCard = ({ title, description, items }) => {
  return (
    <div className="rounded-3xl border border-gray-500 py-7 md:py-12 px-6 bg-white">
      <h2 className="text-center text-2xl font-bold text-neutralDGrey">
        {title}
      </h2>

      <p className="text-neutralGrey text-base mt-4 text-center">
        {description}
      </p>

      <ul className="mt-6 list-disc list-inside space-y-2 text-neutralGrey">
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
