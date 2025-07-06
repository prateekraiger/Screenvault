/// <reference types="vite/client" />

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MusicPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTrack((prev) => (prev + 1) % demoPlaylist.tracks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Static playlist data
  const demoPlaylist = {
    name: "My top tracks playlist",
    creator: "N8king",
    url: "https://open.spotify.com/playlist/0nPBmn6acfwCjiDYEmaCaN?si=XG2MqFwLRK2xfbebOgTBJw",
    tracks: [
      { title: "Espresso", artist: "Sabrin Carpenter" },
      { title: "Sapphire", artist: "Ed Sheeran" },
      { title: "Sugar", artist: "Maroon 5" },
      { title: "The Nights", artist: "Avicii" },
      { title: "Beautiful Things", artist: "Benson Boone" },
      { title: "SNAP", artist: "Rosa Linn" },
      { title: "Timber", artist: "PitBull" },
      { title: "Sensitive", artist: "KR$NA" },
    ],
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(6,12,25,0.98) 0%, rgba(15,23,42,0.95) 40%, rgba(30,41,59,0.98) 100%)",
              "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(6,12,25,0.95) 40%, rgba(17,24,39,0.98) 100%)",
              "linear-gradient(135deg, rgba(30,41,59,0.98) 0%, rgba(15,23,42,0.95) 40%, rgba(6,12,25,0.98) 100%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Animated music wave patterns */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "radial-gradient(circle at 20% 80%, rgba(34,197,94,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(168,85,247,0.2) 0%, transparent 50%)",
          }}
        />
        
        {/* Static decorative elements */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-32 mx-auto min-h-screen">
        {/* Enhanced Header */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            My Spotify
          </motion.h1>
          <motion.div
            className="flex items-center justify-center space-x-4 mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Animated equalizer bars with fixed container height */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-end h-10">
                <motion.div
                  className="w-1 bg-gradient-to-t from-green-500 to-cyan-400 rounded-full"
                  animate={{
                    height: [8, 24, 12, 32, 8],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              </div>
            ))}
          </motion.div>
          <motion.p 
            className="text-cyan-100/90 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Explore my musical journey through Spotify - discover my current vibes, 
            favorite playlists, and the tracks that define my sound.
          </motion.p>
        </motion.div>

        {/* Enhanced Grid Layout */}
        <div className="space-y-12">
          {/* First Row - Profile & Playlist */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            {/* Enhanced Profile Card */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-2xl border border-green-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 p-8 backdrop-blur-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://ik.imagekit.io/mtk2a0sx6/One%20piece.jpg"
                    alt="N8king"
                    className="w-40 h-40 rounded-full shadow-2xl border-4 border-green-400 object-cover"
                  />
                  {/* Animated ring around avatar */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/50 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                <motion.h2 
                  className="text-4xl font-bold text-green-300 mb-4"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(34,197,94,0.5)",
                      "0 0 20px rgba(34,197,94,0.8)",
                      "0 0 10px rgba(34,197,94,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  N8king
                </motion.h2>
                
                <motion.a
                  href="https://open.spotify.com/user/31krsjwznymlovmlk7cy2rv3nyry?si=f5f159e3af0046a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mb-6"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34,197,94,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  View My Spotify Profile
                </motion.a>
                
                <div className="text-center">
                  <p className="text-cyan-200/90 text-lg mb-2">
                    Spotify enthusiast, playlist curator, and music explorer.
                  </p>
                  <motion.p 
                    className="italic text-cyan-300 text-base font-medium"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    "Music is the universal language of mankind."
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Playlist Card */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 p-8 backdrop-blur-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-2xl font-bold text-cyan-200 mb-4 text-center"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(6,182,212,0.5)",
                      "0 0 20px rgba(6,182,212,0.8)",
                      "0 0 10px rgba(6,182,212,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  {demoPlaylist.name}
                </motion.h2>
                
                <div className="text-cyan-300 text-center mb-6">
                  By <span className="font-semibold text-green-400">{demoPlaylist.creator}</span>
                </div>
                
                {/* Enhanced track list */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto custom-scrollbar">
                  {demoPlaylist.tracks.map((track, idx) => (
                    <motion.div
                      key={idx}
                      className={`p-3 rounded-xl transition-all duration-300 ${
                        idx === activeTrack 
                          ? 'bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30'
                          : 'bg-slate-700/30 hover:bg-slate-600/40'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          idx === activeTrack ? 'bg-green-400 animate-pulse' : 'bg-cyan-400/50'
                        }`} />
                        <div className="flex-1">
                          <div className="font-semibold text-white">{track.title}</div>
                          <div className="text-sm text-cyan-400">{track.artist}</div>
                        </div>
                        {idx === activeTrack && (
                          <motion.div
                            className="flex space-x-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            {Array.from({ length: 3 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 h-4 bg-green-400 rounded-full"
                                animate={{ height: [4, 16, 8, 16, 4] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                              />
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.a
                  href={demoPlaylist.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6,182,212,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Open in Spotify
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Row - Currently Playing & Featured Playlist */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            {/* Enhanced Currently Playing Card */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-2xl border border-purple-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 p-8 backdrop-blur-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-2xl font-bold text-purple-200 mb-6 text-center"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(168,85,247,0.5)",
                      "0 0 20px rgba(168,85,247,0.8)",
                      "0 0 10px rgba(168,85,247,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  🎵 Currently Playing
                </motion.h2>
                
                <motion.a
                  href="https://spotify-github-profile.kittinanx.com/api/view?uid=31krsjwznymlovmlk7cy2rv3nyry&redirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="https://spotify-github-profile.kittinanx.com/api/view?uid=31krsjwznymlovmlk7cy2rv3nyry&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=true"
                    alt="Spotify Currently Playing"
                    className="w-full rounded-2xl shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300"
                    style={{ minHeight: 352 }}
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(168,85,247,0.3)"
                    }}
                  />
                </motion.a>
              </div>
            </motion.div>

            {/* Enhanced Featured Playlist Card */}
            <motion.div 
              className="group relative overflow-hidden rounded-3xl shadow-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-black/90 p-8 backdrop-blur-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-2xl font-bold text-blue-200 mb-6 text-center"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(59,130,246,0.5)",
                      "0 0 20px rgba(59,130,246,0.8)",
                      "0 0 10px rgba(59,130,246,0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                >
                  🎧 Featured Playlist
                </motion.h2>
                
                <motion.div 
                  className="w-full rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(59,130,246,0.3)"
                  }}
                >
                  <iframe
                    style={{ borderRadius: "16px" }}
                    src="https://open.spotify.com/embed/playlist/0W18dQC55RQb8yrl3XUbpG?utm_source=generator&theme=0"
                    width="100%"
                    height="420"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify Playlist"
                  ></iframe>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #06b6d4);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0891b2);
        }
      `}</style>
    </div>
  );
}
