import React from "react";
type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void; // ফাংশন, যেটা string নেয়
  isSelected: boolean; // true/false
};
const ProjectTag = ({ name, onClick, isSelected }:ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
