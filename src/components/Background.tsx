import React from "react";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      {/* Background with radial gradient */}
      <div
        className="absolute inset-0 h-full w-full items-center px-5 py-24
        [background:radial-gradient(125%_125%_at_50%_10%,#0e1726_60%,#164e63_100%)]"
      ></div>

      {/* Grid style overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0
          bg-[linear-gradient(to_right,#2dd4bf22_1px,transparent_1px),linear-gradient(to_bottom,#2dd4bf22_1px,transparent_1px)]
          bg-[size:32px_48px]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    </div>
  );
};

export default Background;
