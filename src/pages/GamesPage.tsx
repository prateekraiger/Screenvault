import { Features } from "@/components/ui/games-grid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GamesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [gameStats] = useState({
    totalHours: "2,000+",
    gamesWon: "1,200+",
    peakRating: "Ascendant 1",
    favoriteGame: "Valorant",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Enhanced Gaming Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(5,15,35,0.98) 0%, rgba(15,25,45,0.95) 40%, rgba(25,35,55,0.98) 100%)",
              "linear-gradient(135deg, rgba(15,25,45,0.98) 0%, rgba(5,15,35,0.95) 40%, rgba(20,30,50,0.98) 100%)",
              "linear-gradient(135deg, rgba(25,35,55,0.98) 0%, rgba(15,25,45,0.95) 40%, rgba(5,15,35,0.98) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Optimized Gaming-themed decorations */}
        <div className="absolute inset-0 opacity-6">
          <div className="absolute top-24 left-16 text-6xl">🎮</div>
          <div className="absolute top-40 right-24 text-5xl">🕹️</div>
          <div className="absolute bottom-36 left-1/4 text-6xl">🏆</div>
          <div className="absolute bottom-24 right-16 text-5xl">🎯</div>
          <div className="absolute top-60 left-1/3 text-4xl">🔥</div>
          <div className="absolute bottom-60 right-1/3 text-4xl">⚡</div>
        </div>

        {/* Gaming-themed geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400 rotate-45 animate-pulse" />
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400 rotate-12" />
          <div className="absolute bottom-32 left-1/4 w-28 h-28 border-2 border-green-400 -rotate-12" />
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-red-400 rotate-45" />
        </div>

        {/* Subtle gaming particles */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-32 mx-auto min-h-screen">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center pt-16 pb-12"
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
            My Gaming Universe
          </motion.h1>

          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
              Welcome to my digital playground! Dive into my favorite gaming
              experiences, from competitive FPS battles to epic adventures that
              define my gaming journey.
            </p>
          </motion.div>
        </motion.div>

        {/* Gaming Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            {
              label: "Hours Played",
              value: gameStats.totalHours,
              icon: "⏱️",
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Games Won",
              value: gameStats.gamesWon,
              icon: "🏆",
              color: "from-yellow-500 to-orange-500",
            },
            {
              label: "Peak Rating",
              value: gameStats.peakRating,
              icon: "💚",
              color: "from-green-500 to-emerald-500",
            },
            {
              label: "Favorite Game",
              value: gameStats.favoriteGame,
              icon: "🎯",
              color: "from-green-500 to-emerald-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`relative overflow-hidden backdrop-blur-sm rounded-2xl p-4 text-center transition-all duration-300 ${
                  stat.label === "Peak Rating"
                    ? "bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-2 border-green-500/30 hover:border-green-400/50 shadow-lg shadow-green-500/20"
                    : "bg-slate-800/80 border border-slate-700/50 hover:border-slate-600/70"
                }`}
              >
                {/* Special glow effect for Peak Rating */}
                {stat.label === "Peak Rating" && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10">
                  <motion.div
                    className="text-2xl mb-2"
                    animate={
                      stat.label === "Peak Rating"
                        ? {
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {stat.icon}
                  </motion.div>

                  <motion.div
                    className={`font-bold mb-1 ${
                      stat.label === "Peak Rating"
                        ? "text-xl md:text-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent"
                        : `text-2xl md:text-3xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`
                    }`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    style={{
                      ...(stat.label === "Peak Rating" && {
                        textShadow: "0 0 20px rgba(34,197,94,0.8)",
                      }),
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.value}
                  </motion.div>

                  <div
                    className={`text-sm font-medium ${
                      stat.label === "Peak Rating"
                        ? "text-green-300"
                        : "text-slate-400"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Games Section */}
        <motion.main
          className="relative z-10 w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="text-center mb-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Games Collection
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Hover or tap on any game card to watch epic gameplay highlights
              and see why these titles have earned their place in my gaming hall
              of fame!
            </p>
          </motion.div>

          <section className="w-full">
            <Features />
          </section>

          {/* Gaming Quote Section */}
          <motion.div
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.blockquote
              className="text-2xl md:text-3xl font-medium text-slate-200 italic mb-4"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "Gaming is not just a hobby, it's a journey through countless
              worlds, each offering new challenges and unforgettable memories."
            </motion.blockquote>
            <p className="text-cyan-400 font-semibold">- Every Gamer's Truth</p>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}
