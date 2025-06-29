import React, { useRef, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import playCircle from "../assets/play-circle.svg";
import pauseCircle from "../assets/pause-circle.svg";
import SearchBar from "./SearchBar";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/anime", label: "Anime" },
  { to: "/movies", label: "Movies" },
  { to: "/tv", label: "TV Shows" },
  { to: "/web-series", label: "Web Series" },
  { to: "/music", label: "Music" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  // Play/pause handler for audio and icon
  const handlePlayPauseClick = () => {
    const nextState = !isAudioPlaying;
    setIsAudioPlaying(nextState);
    if (audioElementRef.current) {
      if (nextState) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = 0.3;
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#23272F]/90 backdrop-blur-xl border-b border-cyan-900/40 shadow-2xl w-full m-0 p-0 overflow-x-hidden">
      <div className="w-full px-2 sm:px-4 lg:px-8 min-w-0">
        <div
          className="flex h-16 sm:h-20 items-center justify-between min-w-0 max-w-full overflow-x-hidden scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink-0"
          >
            <Logo size={40} textSize="text-2xl sm:text-3xl md:text-4xl" />
          </Link>

          {/* Right Section: nav links, search bar, play button, menu button */}
          <div
            className="flex items-center min-w-0 ml-auto gap-2 sm:gap-4 overflow-x-hidden scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center flex-wrap gap-2 sm:gap-4 min-w-0 max-w-full overflow-x-hidden flex-shrink-0 scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="relative group text-cyan-200 hover:text-cyan-400 font-medium text-sm sm:text-base transition-all duration-300 py-1 sm:py-2 px-2 sm:px-3 rounded-lg hover:bg-[#164E63]/40 focus:bg-[#164E63]/60 focus:text-cyan-300 min-w-0 max-w-full"
                  style={{ wordBreak: "break-word" }}
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-cyan-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center mx-2 w-64 max-w-xs">
              <SearchBar />
            </div>

            {/* Play Button */}
            <button
              onClick={handlePlayPauseClick}
              className="flex items-center group flex-shrink-0"
              aria-label={isAudioPlaying ? "Pause audio" : "Play audio"}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
              type="button"
            >
              <img
                src={isAudioPlaying ? pauseCircle : playCircle}
                alt={isAudioPlaying ? "Pause" : "Play"}
                className="w-6 h-6 sm:w-7 sm:h-7"
                style={{ filter: "invert(1) brightness(2)" }}
              />
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/loop.mp3"
                loop
                autoPlay
              />
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-cyan-300 hover:text-cyan-400 hover:bg-[#164E63]/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (hidden) */}
        {/* <div className="md:hidden pb-4"> ... </div> */}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-cyan-900/40 bg-[#23272F]/95 backdrop-blur-xl">
          <div className="px-2 sm:px-4 py-4 sm:py-6 space-y-2 sm:space-y-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-2 sm:px-4 py-2 sm:py-3 text-cyan-200 hover:text-cyan-400 font-medium text-base rounded-xl hover:bg-[#164E63]/40 transition-all duration-200 group break-words text-wrap min-w-0 max-w-full"
              >
                <span className="flex items-center justify-between min-w-0 max-w-full">
                  {link.label}
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* Add this to the bottom of the file for custom scrollbar hiding for all browsers */
/*
<style jsx global>{`
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-none {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
*/
