import React from "react";

export const Logo = ({ size = 36, textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center gap-2 select-none">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill="url(#paint0_linear)"
          />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fill="#fff"
            fontSize="18"
            fontWeight="bold"
            dy=".3em"
            fontFamily="'Segoe UI',sans-serif"
          >
            SV
          </text>
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="40"
              y2="40"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span
        className={`font-black bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight ${textSize}`}
      >
        ScreenVault
      </span>
    </div>
  );
};
