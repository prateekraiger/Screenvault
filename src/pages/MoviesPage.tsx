import { FlipText } from "@/components/magicui/flip-text";
import { mockContent } from "@/data/mockData";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MoviesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const movies = mockContent.filter((item) => item.category === "Movie");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Cinema-themed background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(20,20,30,0.98) 0%, rgba(35,25,45,0.95) 40%, rgba(50,30,60,0.98) 100%)",
              "linear-gradient(135deg, rgba(35,25,45,0.98) 0%, rgba(20,20,30,0.95) 40%, rgba(40,30,50,0.98) 100%)",
              "linear-gradient(135deg, rgba(50,30,60,0.98) 0%, rgba(35,25,45,0.95) 40%, rgba(20,20,30,0.98) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Optimized Cinema-themed decorations */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-24 left-16 text-6xl">🎥</div>
          <div className="absolute top-40 right-24 text-5xl">🍿</div>
          <div className="absolute bottom-36 left-1/4 text-6xl">🏆</div>
          <div className="absolute bottom-24 right-16 text-5xl">🎬</div>
          <div className="absolute top-60 left-1/3 text-4xl">🎞️</div>
          <div className="absolute bottom-60 right-1/3 text-4xl">🌟</div>
        </div>
      </div>

      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-32 mx-auto">
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white"
            style={{
              textShadow:
                "0 0 20px rgba(239,68,68,0.8), 0 0 40px rgba(236,72,153,0.6)",
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Movie Theater
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
              Welcome to my personal cinema! Explore a curated collection of
              films from blockbuster spectacles to timeless classics that define
              great storytelling.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-6 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          {movies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
