import React, { useState, useMemo } from "react";
import { mockContent } from "./data/mockData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FilterType } from "./types/Content";
import Navbar from "./components/Navbar";
import TabNavigation from "./components/TabNavigation";
import ContentGrid from "./components/ContentGrid";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

function MainApp() {
  const [isDark, setIsDark] = useLocalStorage("darkMode", false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine activeTab from route
  const getActiveTab = () => {
    if (location.pathname.startsWith("/tv")) return "tv";
    if (location.pathname.startsWith("/web-series")) return "web-series";
    if (location.pathname.startsWith("/anime")) return "anime";
    if (location.pathname.startsWith("/movies")) return "movies";
    return "all";
  };
  const activeTab = getActiveTab();

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const filteredContent = useMemo(() => {
    let filtered = [...mockContent];
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.genre.some((genre) =>
            genre.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          item.review.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    switch (activeTab) {
      case "tv":
        return filtered.filter((item) => item.category === "TV");
      case "web-series":
        return filtered.filter((item) => item.category === "Web Series");
      case "anime":
        return filtered.filter((item) => item.category === "Anime");
      case "movies":
        return filtered.filter((item) =>
          item.genre.some((genre) => genre.toLowerCase().includes("movie"))
        );
      default:
        return filtered.sort(
          (a, b) =>
            new Date(b.dateWatched).getTime() -
            new Date(a.dateWatched).getTime()
        );
    }
  }, [searchTerm, activeTab]);

  const getTabTitle = () => {
    switch (activeTab) {
      case "tv":
        return "TV Shows";
      case "web-series":
        return "Web Series";
      case "anime":
        return "Anime";
      case "movies":
        return "Movies";
      default:
        return "All Your Shows";
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case "tv":
        return "All your TV shows in one place";
      case "web-series":
        return "Browse your favorite web series";
      case "anime":
        return "Explore your anime collection";
      case "movies":
        return "Movies you have watched (filtered by genre)";
      default:
        return "Complete collection of all your watched content";
    }
  };

  // Handle tab navigation (syncs with router)
  const handleTabChange = (tab: FilterType) => {
    switch (tab) {
      case "tv":
        navigate("/tv");
        break;
      case "web-series":
        navigate("/web-series");
        break;
      case "anime":
        navigate("/anime");
        break;
      case "movies":
        navigate("/movies");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="relative min-h-screen text-white transition-colors duration-300">
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* Grid background (on top of gradient) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#444444_1px,transparent_1px),linear-gradient(to_bottom,#444444_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="pt-20 pb-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <h1
                className={`
                text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
                bg-clip-text text-transparent leading-tight
              `}
              >
                StreamCatalog
              </h1>
              <p
                className={`
                text-xl max-w-3xl mx-auto leading-relaxed
                ${isDark ? "text-gray-300" : "text-gray-600"}
              `}
              >
                Your personal entertainment hub. Track, rate, and discover your
                favorite movies, TV shows, and anime series.
              </p>
            </div>
            {/* Tab Navigation */}
            <TabNavigation
              activeTab={activeTab}
              onTabChange={handleTabChange}
              isDark={isDark}
            />
            {/* Section Header */}
            <div className="text-center space-y-3">
              <h2
                className={`
                text-3xl font-bold
                ${isDark ? "text-white" : "text-gray-900"}
              `}
              >
                {getTabTitle()}
              </h2>
              <p
                className={`
                text-lg
                ${isDark ? "text-gray-400" : "text-gray-600"}
              `}
              >
                {getTabDescription()}
              </p>
              <div
                className={`
                inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                ${
                  isDark
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }
              `}
              >
                {filteredContent.length}{" "}
                {filteredContent.length === 1 ? "item" : "items"}
              </div>
            </div>
            {/* Content Grid */}
            <Routes>
              <Route
                path="/"
                element={
                  <ContentGrid content={filteredContent} isDark={isDark} />
                }
              />
              <Route
                path="/tv"
                element={
                  <ContentGrid content={filteredContent} isDark={isDark} />
                }
              />
              <Route
                path="/web-series"
                element={
                  <ContentGrid content={filteredContent} isDark={isDark} />
                }
              />
              <Route
                path="/anime"
                element={
                  <ContentGrid content={filteredContent} isDark={isDark} />
                }
              />
              <Route
                path="/movies"
                element={
                  <ContentGrid content={filteredContent} isDark={isDark} />
                }
              />
            </Routes>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer
        className={`
        py-12 border-t
        ${
          isDark
            ? "border-gray-700 bg-gray-900/50"
            : "border-gray-200 bg-white/50"
        }
        backdrop-blur-sm
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div
            className={`
            text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600
            bg-clip-text text-transparent
          `}
          >
            StreamCatalog
          </div>
          <p
            className={`
            text-sm
            ${isDark ? "text-gray-400" : "text-gray-600"}
          `}
          >
            © 2024 StreamCatalog. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
