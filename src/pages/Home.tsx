import React, { memo, useMemo, lazy, Suspense } from "react";
import { FlipText } from "@/components/magicui/flip-text";
import { useNavigate } from "react-router-dom";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { MagicCard } from "@/components/magicui/magic-card";
import {
  FaTv,
  FaGlobe,
  FaFilm,
  FaDragon,
  FaMusic,
  FaGamepad,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Lazy load the heavy 3D marquee component
const ThreeDMarqueeDemo = lazy(() => import("@/components/ui/3d-marquee-demo"));

const routes = [
  {
    label: "Anime",
    path: "/anime",
    icon: <FaDragon className="w-8 h-8 text-pink-400 mb-3" />,
  },
  {
    label: "Movies",
    path: "/movies",
    icon: <FaFilm className="w-8 h-8 text-yellow-400 mb-3" />,
  },
  {
    label: "TV Shows",
    path: "/tv",
    icon: <FaTv className="w-8 h-8 text-cyan-400 mb-3" />,
  },
  {
    label: "Web Series",
    path: "/web-series",
    icon: <FaGlobe className="w-8 h-8 text-teal-400 mb-3" />,
  },
  {
    label: "Music",
    path: "/music",
    icon: <FaMusic className="w-8 h-8 text-green-400 mb-3" />,
  },
  {
    label: "Games",
    path: "/games",
    icon: <FaGamepad className="w-8 h-8 text-indigo-400 mb-3" />,
  },
];

const categoryDescriptions: Record<string, string> = {
  "TV Shows": "Binge-worthy series with captivating storylines and unforgettable characters.",
  "Web Series": "Digital storytelling at its finest with innovative and creative formats.",
  Anime: "Japanese animation featuring vibrant art and imaginative fantasy worlds.",
  Movies: "Cinematic masterpieces spanning all genres and storytelling styles.",
  Music: "Your Spotify profile, playlists, and currently playing—all in one place!",
  Games: "Interactive gaming experiences and epic adventures to explore!",
};

// Optimized card component with memoization
const CategoryCard = memo(({ route, onClick }: { route: any; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    className="w-full min-w-0"
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
  >
    <MagicCard className="rounded-3xl h-full">
      <BackgroundGradient className="rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer shadow-xl group min-w-0 w-full h-full border-0">
        {React.cloneElement(route.icon, {
          className: "w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 transition-transform duration-200 group-hover:scale-105 " + route.icon.props.className,
        })}
        <span className="text-base sm:text-xl md:text-2xl font-bold text-cyan-100 mb-1 sm:mb-2 tracking-tight group-hover:text-cyan-300 transition-colors break-words text-wrap">
          {route.label}
        </span>
        <span className="text-cyan-200/90 text-xs sm:text-sm text-center mt-1 sm:mt-2 font-medium break-words text-wrap leading-relaxed">
          {categoryDescriptions[route.label]}
        </span>
      </BackgroundGradient>
    </MagicCard>
  </motion.button>
));

export default function Home() {
  const navigate = useNavigate();
  
  // Memoize navigation handlers for better performance
  const navigationHandlers = useMemo(
    () => routes.reduce((acc, route) => {
      acc[route.path] = () => navigate(route.path);
      return acc;
    }, {} as Record<string, () => void>),
    [navigate]
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full overflow-x-hidden">
      {/* Header Section with optimized animations */}
      <motion.div 
        className="text-center mb-12 mt-16 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 text-white"
          style={{
            textShadow: "0 0 30px rgba(6,182,212,0.8), 0 0 60px rgba(6,182,212,0.4)",
          }}
        >
          Welcome to ScreenVault
        </motion.h1>
        
        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-slate-300 px-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your personal entertainment vault featuring handpicked movies, TV shows, 
          web series, anime, music, and games. Discover your next favorite from 
          a carefully curated collection.
        </motion.p>
      </motion.div>

      {/* Optimized Background Decorations */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-4">
          <div className="absolute top-20 left-16 text-6xl">🎬</div>
          <div className="absolute top-32 right-24 text-5xl">📺</div>
          <div className="absolute bottom-40 right-16 text-6xl">🎵</div>
          <div className="absolute bottom-60 left-20 text-5xl">🎭</div>
          <div className="absolute top-40 right-1/3 text-4xl">🍿</div>
          <div className="absolute bottom-32 left-1/3 text-5xl">⭐</div>
        </div>
      </div>

      {/* Optimized Cards Grid */}
      <motion.div 
        className="flex justify-center w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
          {routes.map((route, index) => (
            <motion.div
              key={route.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5 + index * 0.05, 
                duration: 0.4,
                ease: "easeOut"
              }}
            >
              <CategoryCard
                route={route}
                onClick={navigationHandlers[route.path]}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Optimized Hall of Fame Section */}
      <motion.section 
        className="w-full flex justify-center px-4 sm:px-6 md:px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full max-w-[1920px] bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-950/90 rounded-3xl shadow-2xl border border-slate-700/40 p-6 sm:p-8 md:p-12 flex flex-col items-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-center text-white tracking-tight"
            style={{
              textShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hall of Fame
          </motion.h2>
          
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-full">
              <Suspense 
                fallback={
                  <div className="w-full h-[600px] sm:h-[700px] md:h-[800px] flex flex-col items-center justify-center">
                    <div className="text-6xl mb-4 animate-spin">
                      ⏳
                    </div>
                    <motion.div
                      className="text-cyan-400 text-xl font-medium"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Loading Hall of Fame...
                    </motion.div>
                  </div>
                }
              >
                <ThreeDMarqueeDemo />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
