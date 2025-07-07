// Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-12 h-12">
        <div className="absolute w-12 h-1 bg-cyan-400 opacity-50 rounded-full top-16 left-0 animate-shadow"></div>
        <div className="absolute w-full h-full bg-cyan-500 rounded-md animate-jump"></div>
      </div>

      <style jsx>{`
        @keyframes jump {
          15% {
            border-bottom-right-radius: 0.75rem;
          }
          25% {
            transform: translateY(0.5625rem) rotate(22.5deg);
          }
          50% {
            transform: translateY(1.125rem) scale(1, 0.9) rotate(45deg);
            border-bottom-right-radius: 2.5rem;
          }
          75% {
            transform: translateY(0.5625rem) rotate(67.5deg);
          }
          100% {
            transform: translateY(0) rotate(90deg);
          }
        }

        @keyframes shadow {
          0%,
          100% {
            transform: scale(1, 1);
          }
          50% {
            transform: scale(1.2, 1);
          }
        }

        .animate-jump {
          animation: jump 0.5s linear infinite;
        }

        .animate-shadow {
          animation: shadow 0.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
