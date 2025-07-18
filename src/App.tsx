import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TVPage from "./pages/TVPage";
import WebSeriesPage from "./pages/WebSeriesPage";
import AnimePage from "./pages/AnimePage";
import MoviesPage from "./pages/MoviesPage";
import AllContentPage from "./pages/AllContentPage";
import MusicPage from "./pages/MusicPage";
import Loader from "@/components/Loader";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import GamesPage from "./pages/GamesPage";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
}

function MainApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-100 transition-colors duration-300">
      <Background />
      {/* Loader overlay for whole page with fade animation */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#23272F] transition-opacity duration-1000 pointer-events-none ${
          loading ? "opacity-100" : "opacity-0"
        }`}
        style={{ visibility: loading ? "visible" : "hidden" }}
      >
        <Loader />
      </div>
      {/* Hide all content while loading, then fade in with BlurFade */}
      <BlurFade duration={0.7} delay={0.1}>
        <div className={loading ? "invisible" : "visible"}>
          <main className="flex-1 pt-20 pb-0 flex flex-col">
            <div className="w-full px-4 sm:px-6 lg:px-8 min-h-[60vh] flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tv" element={<TVPage />} />
                <Route path="/web-series" element={<WebSeriesPage />} />
                <Route path="/anime" element={<AnimePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/all" element={<AllContentPage />} />
                <Route path="/music" element={<MusicPage />} />
                <Route path="/games" element={<GamesPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </BlurFade>
    </div>
  );
}

export default function App() {
  const isDesktop = useIsDesktop();
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <>
        {isDesktop && <SmoothCursor />}
        <Navbar />
        <div className="relative min-h-screen flex flex-col">
          <div className="flex-1">
            <MainApp />
          </div>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
}
