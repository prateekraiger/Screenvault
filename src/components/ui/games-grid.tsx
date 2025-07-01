import { LayoutGrid } from "@/components/ui/layout-grid";
import React, { useState } from "react";

const VIDEO1 =
  "https://ik.imagekit.io/mtk2a0sx6/valorant.mp4?updatedAt=1751382810576";
const VIDEO2 = "https://ik.imagekit.io/mtk2a0sx6/rdr.mp4?tr=orig";
const VIDEO3 = "https://ik.imagekit.io/mtk2a0sx6/clip2.mp4";
const VIDEO4 = "https://ik.imagekit.io/mtk2a0sx6/human-torch.mp4?tr=orig";

const THUMB1 = "https://ik.imagekit.io/mtk2a0sx6/valorant-thumbnail.jpg";
const THUMB2 = "https://images6.alphacoders.com/139/thumbbig-1397426.webp";
const THUMB3 =
  "https://i.pinimg.com/736x/fe/c7/5e/fec75eadc8039bb627d7058c8a735481.jpg";
const THUMB4 = "https://ik.imagekit.io/mtk2a0sx6/marvel-rivals-thumnail.jpeg";

const cardsData = [
  {
    id: 1,
    title: "Valorant",
    desc: "My favorite PC shooter with friends.",
    thumbnail: THUMB1,
    video: VIDEO1,
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Red Dead Redemption",
    desc: "Epic open-world western adventure.",
    thumbnail: THUMB2,
    video: VIDEO2,
    className: "col-span-1",
  },
  {
    id: 3,
    title: "Valorant (ACE!)",
    desc: "Competitive FPS, always a thrill!",
    thumbnail: THUMB3,
    video: VIDEO3,
    className: "col-span-1",
  },
  {
    id: 4,
    title: "Marvel Rivals",
    desc: "Fast-paced hero shooter with explosive team battles",
    thumbnail: THUMB4,
    video: VIDEO4,
    className: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section className="py-8 md:py-12 w-full">
      <LayoutGrid
        cards={cardsData.map((card) => ({
          ...card,
          content: "",
          renderMedia: ({ isSelected }: { isSelected: boolean }) => (
            <>
              {isSelected ? (
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full rounded-xl"
                  style={{ minHeight: 200, maxHeight: 400 }}
                />
              ) : (
                <img
                  src={card.thumbnail}
                  alt={card.title + " thumbnail"}
                  className="object-cover w-full h-full rounded-xl"
                  style={{ minHeight: 200, maxHeight: 400 }}
                />
              )}
              <div className="p-4">
                {!isSelected ? (
                  <p className="font-bold md:text-2xl text-lg text-white text-center">
                    {card.title}
                  </p>
                ) : (
                  <div className="mt-4 bg-zinc-800/80 rounded-lg px-4 py-3 border border-zinc-700 shadow text-center">
                    <p className="text-lg md:text-xl text-cyan-100 font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                )}
              </div>
            </>
          ),
        }))}
      />
    </section>
  );
}
