import { useId, useState } from "react";
import { Search as SearchIcon, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm w-full">
      <div className="w-full flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight"
        >
          StreamCatalog
        </Link>
        {/* Centered Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id={id}
              type="text"
              placeholder="Search movies, shows, anime..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-800 text-white placeholder-gray-400"
            />
          </div>
        </div>
        {/* Navigation links (desktop) */}
        <nav className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="text-base font-medium transition-colors duration-200 text-gray-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Hamburger menu (mobile) */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 pb-4 pt-2 space-y-2">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block w-full py-2 text-base font-medium text-gray-300 hover:text-white"
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
