import React from "react";

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
      {/* Only the grid overlay, no blue/teal overlays or gradients */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#06b6d42e_1px,transparent_1px),linear-gradient(to_bottom,#3b82f62e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};

export default Background;
