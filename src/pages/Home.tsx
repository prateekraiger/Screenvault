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

// Enhanced card component with unique animations
const CategoryCard = memo(({ route, onClick, index }: { route: any; onClick: () => void; index: number }) => (
  <motion.button
    onClick={onClick}
    className="w-full min-w-0 relative group"
    whileHover={{ 
      scale: 1.02,
      rotateY: 5,
      rotateX: 5,
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ 
      duration: 0.2, 
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 20
    }}
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px"
    }}
  >
    <MagicCard className="rounded-3xl h-full overflow-hidden">
      <BackgroundGradient className="rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer shadow-xl group min-w-0 w-full h-full border-0 relative animated-card">
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 via-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>
        <div className="absolute inset-[2px] rounded-3xl bg-slate-800/90 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          {/* Floating icon with pulse effect */}
          <motion.div
            className="relative mb-2 sm:mb-3"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {React.cloneElement(route.icon, {
              className: "w-7 h-7 sm:w-8 sm:h-8 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.7)] group-hover:filter group-hover:brightness-125 " + route.icon.props.className,
            })}
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-40 blur-md animate-pulse -z-10 scale-150"></div>
          </motion.div>
          
          {/* Title with typewriter effect on hover */}
          <motion.span 
            className="text-base sm:text-xl md:text-2xl font-bold text-cyan-100 mb-1 sm:mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:via-cyan-300 group-hover:to-blue-400 transition-all duration-500 break-words text-wrap"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 25px rgba(16,185,129,0.9), 0 0 35px rgba(6,182,212,0.6)"
            }}
          >
            {route.label}
          </motion.span>
          
          {/* Description with slide-up animation */}
          <motion.span 
            className="text-cyan-200/90 text-xs sm:text-sm text-center mt-1 sm:mt-2 font-medium break-words text-wrap leading-relaxed group-hover:text-emerald-100 group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-500"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1, y: -2 }}
          >
            {categoryDescriptions[route.label]}
          </motion.span>
          
        </div>
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
                index={index}
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
