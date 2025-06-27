import React, { useState, useMemo, useEffect, useRef } from "react";
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
import Background from "./components/Background";
import Footer from "./components/Footer";
import { FlipText } from "@/components/magicui/flip-text";
import Home from "./pages/Home";
import TVPage from "./pages/TVPage";
import WebSeriesPage from "./pages/WebSeriesPage";
import AnimePage from "./pages/AnimePage";
import MoviesPage from "./pages/MoviesPage";
import Loader from "@/components/Loader";

function MainApp() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    setLoading(true);
    let timeout;
    if (isFirstLoad.current) {
      timeout = setTimeout(() => setLoading(false), 2000); // 2s for initial load
      isFirstLoad.current = false;
    } else {
      timeout = setTimeout(() => setLoading(false), 1500); // 1.5s for route changes
    }
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="relative min-h-screen text-gray-100 transition-colors duration-300">
      <Background />
      {/* Loader overlay for whole page with fade animation */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#23272F] transition-opacity duration-700 pointer-events-none ${
          loading ? "opacity-100" : "opacity-0"
        }`}
        style={{ visibility: loading ? "visible" : "hidden" }}
      >
        <Loader />
      </div>
      {/* Hide all content while loading */}
      <div className={loading ? "invisible" : "visible"}>
        <Navbar searchTerm="" onSearchChange={() => {}} />
        <main className="pt-20 pb-8">
          <div className="w-full px-4 sm:px-6 lg:px-8 min-h-[60vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tv" element={<TVPage />} />
              <Route path="/web-series" element={<WebSeriesPage />} />
              <Route path="/anime" element={<AnimePage />} />
              <Route path="/movies" element={<MoviesPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1">
          <MainApp />
        </div>
      </div>
    </BrowserRouter>
  );
}
