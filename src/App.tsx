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
import Background from "./components/Background";
import Footer from "./components/Footer";
import { FlipText } from "@/components/magicui/flip-text";
import Home from "./pages/Home";
import TVPage from "./pages/TVPage";
import WebSeriesPage from "./pages/WebSeriesPage";
import AnimePage from "./pages/AnimePage";
import MoviesPage from "./pages/MoviesPage";

function MainApp() {
  return (
    <div className="relative min-h-screen text-gray-100 transition-colors duration-300">
      <Background />
      <Navbar searchTerm="" onSearchChange={() => {}} />
      <main className="pt-20 pb-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}
