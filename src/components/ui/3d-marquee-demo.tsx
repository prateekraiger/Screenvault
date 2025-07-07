"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { motion } from "framer-motion";

export default function ThreeDMarqueeDemo() {
  const images = [
    "https://wallpapercave.com/wp/wp8890308.jpg",
    "https://wallpapercave.com/wp/wp15076427.webp",
    "https://wallpapercave.com/wp/wp7997723.jpg",
    "https://wallpapercave.com/wp/wp12077339.jpg",
    "https://wallpapercave.com/wp/wp11471441.jpg",
    "https://wallpapercave.com/wp/wp9161037.png ",

    "https://wallpapercave.com/wp/wp4937652.jpg",
    "https://wallpapercave.com/wp/wp2156334.jpg",
    "https://wallpapercave.com/wp/wp15188366.webp",
    "https://wallpapercave.com/wp/wp4292452.jpg",
    "https://wallpapercave.com/wp/wp9944877.png",

    "https://wallpapercave.com/wp/wp11310646.jpg",
    "https://wallpapercave.com/wp/wp13642205.jpg",
    "https://wallpapercave.com/wp/wp12764521.jpg",
    "https://wallpapercave.com/wp/wp14832979.webp",
    "https://wallpapercave.com/wp/wp5792289.jpg",

    "https://wallpapercave.com/wp/wp14647899.jpg",
    "https://wallpapercave.com/wp/wp3592166.jpg",
    "https://wallpapercave.com/wp/wp3592166.jpg",
    "https://wallpapercave.com/wp/wp12130683.jpg",
    "https://wallpapercave.com/wp/6FXFOIY.jpg",
    "https://wallpapercave.com/wp/wp15141980.webp",
  ];

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 40%, rgba(17,24,39,0.95) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1.5px solid rgba(255,255,255,0.1)",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 40%, rgba(17,24,39,0.95) 100%)",
            "linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(15,23,42,0.9) 40%, rgba(30,41,59,0.95) 100%)",
            "linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(17,24,39,0.9) 40%, rgba(15,23,42,0.95) 100%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated light rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.04) 45deg, transparent 90deg, rgba(255,255,255,0.04) 135deg, transparent 180deg, rgba(255,255,255,0.04) 225deg, transparent 270deg, rgba(255,255,255,0.04) 315deg, transparent 360deg)",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative w-full h-full px-2 sm:px-4 md:px-8 py-4 sm:py-6 flex justify-center items-center">
        <ThreeDMarquee images={images} />
      </div>

      {/* Subtle vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.15) 100%)",
        }}
      />
    </div>
  );
}
