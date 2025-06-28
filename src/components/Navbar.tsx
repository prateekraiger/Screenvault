import { useId, useState } from "react";
import { Search as SearchIcon, Menu, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { Logo } from "./Logo";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/anime", label: "Anime" },
  { to: "/movies", label: "Movies" },
  { to: "/tv", label: "TV Shows" },
  { to: "/web-series", label: "Web Series" },
];

export default function Navbar() {
  const id = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#23272F]/90 backdrop-blur-xl border-b border-cyan-900/40 shadow-2xl w-full m-0 p-0">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo size={36} textSize="text-2xl" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
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
