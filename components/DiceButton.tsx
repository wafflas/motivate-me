import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

const DiceButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
    className="
      group
      flex items-center jus
      bg-gradient-to-b from-gray-200 to-gray-300
      rounded-full
      p-4
      w-16
      h-16
      hover:w-48
      transition-all duration-300
      overflow-hidden
      shadow-lg
      focus:outline-none
    "
    onClick={onClick}
    >
    <span
      className="
        max-w-0
        opacity-0
        group-hover:max-w-[200px]
        group-hover:opacity-100
        transition-all duration-300
        whitespace-nowrap
        text-black
        text-lg
        font-medium

      "
    >
      Motivate Me!
    </span>
    <FontAwesomeIcon
      icon={faDice}
      className="text-black size-8"
    />
  </button>
  );
};

export default DiceButton;
