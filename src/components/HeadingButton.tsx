import React from "react";

const HeadingButton = ({ text = "Watch" }: { text?: string }) => {
  return (
    <button
      className="
      relative
      text-xl
      py-4 px-10
      rounded-md
      cursor-pointer
      uppercase
      font-bold
      text-gray-100
      bg-gray-900
      transition-all
      duration-600
      shadow-[0_0_60px_#1f4c65]
      [box-reflect:below_10px_linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,0.4))]

      hover:bg-gradient-to-r
      hover:from-[rgba(2,29,78,0.681)]
      hover:via-[rgba(31,115,232,0.6)]
      hover:to-[rgba(31,215,232,0.873)]
      hover:text-indigo-950

      active:scale-95
    "
    >
      {text}
    </button>
  );
};

export default HeadingButton;
