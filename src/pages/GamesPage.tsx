import { Features } from "@/components/ui/games-grid";

export default function GamesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-2">
      <main className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-300 mb-2 mt-10 drop-shadow-lg text-center tracking-tight select-none pointer-events-none">
          My Favorite Games
        </h1>
        <p className="text-cyan-100/80 text-center max-w-2xl mb-6 md:mb-10 text-base md:text-lg font-medium">
          Explore my top picks for immersive, competitive, and story-driven
          games. Hover or tap on a card to watch a highlight!
        </p>
        <section className="w-full">
          <Features />
        </section>
      </main>
    </div>
  );
}
