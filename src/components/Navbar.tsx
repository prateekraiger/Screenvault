import { useId, useState } from "react";
import { Search as SearchIcon, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
// TODO: Replace with actual Logo component
// import Logo from "@/registry/default/components/navbar-components/logo";
// TODO: Replace with actual Button component
// import { Button } from "@/components/ui/button";
// TODO: Replace with actual Input component
// import { Input } from "@/components/ui/input";
// TODO: Replace with actual NavigationMenu components
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
// TODO: Replace with actual Popover components
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const navigationLinks = [
  { to: "/tv", label: "TV Shows" },
  { to: "/web-series", label: "Web Series" },
  { to: "/anime", label: "Anime" },
  { to: "/movies", label: "Movies" },
];

export default function Navbar({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}) {
  const id = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-900/40 bg-[#23272F]/90 backdrop-blur-xl w-full shadow-lg">
      <div className="w-full flex h-16 items-center justify-between gap-2 md:gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo and Hamburger Row */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <FaPlayCircle className="w-7 h-7 text-cyan-400 drop-shadow" />
            <Link
              to="/"
              className="font-bold text-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-tight drop-shadow-md"
            >
              ScreenVault
            </Link>
          </div>
          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden p-2 rounded-lg text-cyan-200 hover:text-cyan-400 hover:bg-[#164E63]/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {/* Centered Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-cyan-300" />
            </div>
            <input
              id={id}
              type="text"
              placeholder="Search movies, shows, anime..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-cyan-900/40 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 bg-[#23272F] text-cyan-100 placeholder-cyan-400/80 shadow-sm"
            />
          </div>
        </div>
        {/* Navigation links (desktop) */}
        <nav className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-base font-medium transition-colors duration-200 text-cyan-200 hover:text-cyan-400 px-2 py-1 rounded-lg hover:bg-[#164E63]/40 focus:bg-[#164E63]/60 focus:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#23272F]/95 border-t border-cyan-900/40 px-4 pb-4 pt-2 space-y-2 shadow-xl rounded-b-2xl animate-fade-in">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block w-full py-2 text-base font-medium text-cyan-200 hover:text-cyan-400 rounded-lg hover:bg-[#164E63]/40 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
