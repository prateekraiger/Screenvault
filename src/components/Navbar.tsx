import { useId, useState } from "react";
import { Search as SearchIcon, Menu, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/tv", label: "TV Shows" },
  { to: "/web-series", label: "Web Series" },
  { to: "/anime", label: "Anime" },
  { to: "/movies", label: "Movies" },
];

export default function Navbar({
  searchTerm = "",
  onSearchChange = () => {},
}: {
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
}) {
  const id = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#23272F]/90 backdrop-blur-xl border-b border-cyan-900/40 shadow-2xl w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl blur opacity-60 group-hover:opacity-90 transition duration-300"></div>
              <div className="relative bg-gradient-to-r from-cyan-600 to-teal-600 p-2 rounded-xl shadow-lg">
                <FaPlayCircle className="w-7 h-7 text-cyan-400 drop-shadow" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent tracking-tight group-hover:brightness-125 transition duration-300">
                ScreenVault
              </span>
              <span className="text-xs text-cyan-300 font-medium -mt-1 opacity-80">
                Stream Everything
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="relative group text-cyan-200 hover:text-cyan-400 font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-[#164E63]/40 focus:bg-[#164E63]/60 focus:text-cyan-300"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-cyan-400 to-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Search Bar (hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div
              className={`relative w-full transition-all duration-300 ${
                searchFocused ? "transform scale-105" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon
                  className={`h-5 w-5 transition-colors duration-300 ${
                    searchFocused ? "text-cyan-400" : "text-cyan-300"
                  }`}
                />
              </div>
              <input
                id={id}
                type="text"
                placeholder="Search movies, shows, anime..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-12 pr-4 py-3 bg-[#23272F]/80 border rounded-xl text-cyan-100 placeholder-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 hover:bg-[#164E63]/40 ${
                  searchFocused
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                    : "border-cyan-900/40"
                }`}
              />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-cyan-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-cyan-300 hover:text-cyan-400 hover:bg-[#164E63]/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar (hidden) */}
        {/* <div className="md:hidden pb-4"> ... </div> */}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-cyan-900/40 bg-[#23272F]/95 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-cyan-200 hover:text-cyan-400 font-medium rounded-xl hover:bg-[#164E63]/40 transition-all duration-200 group"
              >
                <span className="flex items-center justify-between">
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
