// loader.tsx
import React from "react";

const Loader = () => {
  return (
    <>
      <style>{`
        @keyframes from-left {
          0% {
            z-index: 20;
            opacity: 0;
            transform: translate(-20px, -6px);
          }
          20% {
            z-index: 10;
            opacity: 1;
            transform: translate(0, 0);
          }
          40% {
            z-index: 9;
            transform: translate(0, 4px);
          }
          60% {
            z-index: 8;
            transform: translate(0, 8px);
          }
          80% {
            z-index: 7;
            opacity: 1;
            transform: translate(0, 12px);
          }
          100% {
            z-index: 5;
            transform: translate(0, 30px);
            opacity: 0;
          }
        }

        @keyframes from-right {
          0% {
            z-index: 20;
            opacity: 0;
            transform: translate(20px, -6px);
          }
          20% {
            z-index: 10;
            opacity: 1;
            transform: translate(0, 0);
          }
          40% {
            z-index: 9;
            transform: translate(0, 4px);
          }
          60% {
            z-index: 8;
            transform: translate(0, 8px);
          }
          80% {
            z-index: 7;
            opacity: 1;
            transform: translate(0, 12px);
          }
          100% {
            z-index: 5;
            transform: translate(0, 30px);
            opacity: 0;
          }
        }

        .box-1 {
          animation: from-left 4s infinite;
        }

        .box-2 {
          animation: from-right 4s infinite;
          animation-delay: 1s;
        }

        .box-3 {
          animation: from-left 4s infinite;
          animation-delay: 2s;
        }

        .box-4 {
          animation: from-right 4s infinite;
          animation-delay: 3s;
        }
      `}</style>

      <div className="scale-[3] h-[50px] w-[40px]">
        <div className="relative opacity-0 left-[10px] box-1">
          <div className="absolute bg-[#286cb5] w-[19px] h-[5px] skew-y-[-25deg] top-[14px] left-[10px]"></div>
          <div className="absolute bg-[#2f85e0] w-[19px] h-[5px] skew-y-[25deg] top-[14px] left-[-9px]"></div>
          <div className="absolute bg-[#5fa8f5] w-[20px] h-[20px] rotate-45 skew-x-[-20deg] skew-y-[-20deg]"></div>
        </div>
        <div className="relative opacity-0 left-[10px] box-2">
          <div className="absolute bg-[#286cb5] w-[19px] h-[5px] skew-y-[-25deg] top-[14px] left-[10px]"></div>
          <div className="absolute bg-[#2f85e0] w-[19px] h-[5px] skew-y-[25deg] top-[14px] left-[-9px]"></div>
          <div className="absolute bg-[#5fa8f5] w-[20px] h-[20px] rotate-45 skew-x-[-20deg] skew-y-[-20deg]"></div>
        </div>
        <div className="relative opacity-0 left-[10px] box-3">
          <div className="absolute bg-[#286cb5] w-[19px] h-[5px] skew-y-[-25deg] top-[14px] left-[10px]"></div>
          <div className="absolute bg-[#2f85e0] w-[19px] h-[5px] skew-y-[25deg] top-[14px] left-[-9px]"></div>
          <div className="absolute bg-[#5fa8f5] w-[20px] h-[20px] rotate-45 skew-x-[-20deg] skew-y-[-20deg]"></div>
        </div>
        <div className="relative opacity-0 left-[10px] box-4">
          <div className="absolute bg-[#286cb5] w-[19px] h-[5px] skew-y-[-25deg] top-[14px] left-[10px]"></div>
          <div className="absolute bg-[#2f85e0] w-[19px] h-[5px] skew-y-[25deg] top-[14px] left-[-9px]"></div>
          <div className="absolute bg-[#5fa8f5] w-[20px] h-[20px] rotate-45 skew-x-[-20deg] skew-y-[-20deg]"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
