import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const GAME_VIDEO = "https://ik.imagekit.io/mtk2a0sx6/vd.mp4?tr=orig";

const cards = [
  {
    title: "Valorant",
    desc: "Tactical 5v5 shooter. My go-to FPS!",
    colSpan: "sm:col-span-3 sm:rounded-none sm:rounded-tl-xl",
  },
  {
    title: "Red Dead Redemption 2",
    desc: "Epic open world, gripping story.",
    colSpan: "sm:col-span-2 sm:rounded-none sm:rounded-tr-xl",
  },
  {
    title: "Valorant",
    desc: "Competitive shooter. Always a thrill!",
    colSpan: "sm:col-span-2 sm:rounded-none sm:rounded-bl-xl",
  },
  {
    title: "Marvel Rivals",
    desc: "6v6 PVP with Marvel heroes and villains.",
    colSpan: "sm:col-span-3 sm:rounded-none sm:rounded-br-xl",
  },
];

export default function GamesPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start py-8 px-2">
      <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-300 mb-8 mt-8 drop-shadow-lg text-center tracking-tight select-none pointer-events-none">
        My Favorite Games
      </h1>
      <section className="w-full">
        <div className="mx-auto w-full max-w-7xl px-2 md:px-8">
          <div className="mx-auto grid gap-4 sm:grid-cols-5">
            {cards.map((card, idx) => (
              <Card
                key={card.title + idx}
                className={`group overflow-hidden bg-zinc-800 border-zinc-700 shadow-black/10 flex flex-col ${card.colSpan}`}
              >
                <div className="px-6 pt-4 pb-2">
                  <p className="font-bold text-cyan-200 text-lg mb-2 text-left">
                    {card.title}
                  </p>
                </div>
                <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
                  <video
                    src={GAME_VIDEO}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-3 pb-4 px-6">
                  <p className="text-cyan-100/80 text-sm text-left line-clamp-2">
                    {card.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
