import React from "react";
import { Features } from "@/components/ui/games-grid";

export default function GamesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-2">
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-300 mb-8 mt-8 drop-shadow-lg text-center tracking-tight select-none pointer-events-none">
        My Favorite Games
      </h1>
      <section className="w-full">
        <Features />
      </section>
    </div>
  );
}
