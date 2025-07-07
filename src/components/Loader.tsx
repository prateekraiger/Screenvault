// Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-12 h-12">
        <div className="absolute w-12 h-1 bg-cyan-400 opacity-50 rounded-full top-16 left-0 animate-shadow"></div>
        <div className="absolute w-full h-full bg-cyan-500 rounded-md animate-jump"></div>
      </div>
    </div>
  );
};

export default Loader;
