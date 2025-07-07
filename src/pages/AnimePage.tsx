import { FlipText } from "@/components/magicui/flip-text";
import { mockContent } from "@/data/mockData";
import Card from "@/components/Card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimePage() {
  const [isVisible, setIsVisible] = useState(false);
  const anime = mockContent.filter((item) => item.category === "Anime");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Anime-themed background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,41,59,0.95) 40%, rgba(45,55,75,0.98) 100%)",
              "linear-gradient(135deg, rgba(30,41,59,0.98) 0%, rgba(15,23,42,0.95) 40%, rgba(35,45,65,0.98) 100%)",
              "linear-gradient(135deg, rgba(45,55,75,0.98) 0%, rgba(30,41,59,0.95) 40%, rgba(15,23,42,0.98) 100%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Optimized Anime-themed decorations */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-32 left-20 text-7xl">🌸</div>
          <div className="absolute top-20 right-32 text-5xl">⭐</div>
          <div className="absolute bottom-40 left-1/4 text-6xl">🗾</div>
          <div className="absolute bottom-32 right-20 text-5xl">🎌</div>
          <div className="absolute top-60 left-1/3 text-4xl">🌌</div>
          <div className="absolute bottom-60 right-1/3 text-4xl">🚀</div>
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
                "0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(147,51,234,0.6)",
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
            Anime Collection
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
              Step into the captivating world of Japanese animation where
              storytelling meets artistry. Discover anime series and movies that
              have captured hearts worldwide.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-6 pb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          {anime.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
            >
              <Card {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
