import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "./draggable-card";

export default function Featured() {
  const items = [
    {
      title: "Breaking Bad",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FineLOBPG8AZsluYwnkMpHRyu7L.jpg",
    },
    {
      title: "Friends",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F2koX1xLkpTQM4IZebYvKysFW1Nh.jpg",
    },
    {
      title: "Money Heist",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F65f9SDRqooLZEnaC629TnDDiGzb.jpg",
    },
    {
      title: "Game of Thrones",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    },
    {
      title: "One Piece",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FcMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    },
    {
      title: "Attack On Titan",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FhqRb1wyIVsaMukZElPBUXoJPqrR.jpg",
    },
    {
      title: "Detective Conan",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F1o2o7RELi8rtRrTh8iHYkprpDrn.jpg",
    },
    {
      title: "Solo Levelling",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fa7i9OdTUo9jZ1XoraCRIQNJ6ACX.jpg",
    },
    {
      title: "You",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FoANi0vEE92nuijiZQgPZ88FSxqQ.jpg",
    },
    {
      title: "Tenet",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2Fe%2Fgracenote%2Fe8c260df1f612494392ae154abfc9bdf.jpg",
    },
    {
      title: "Avengers",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fmetadata-static.plex.tv%2F8%2Fgracenote%2F8da028f7cbbeff603eb2627251ebef12.jpg",
    },
    {
      title: "Loki",
      image:
        "https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FoJdVHUYrjdS2IqiNztVIP4GPB1p.jpg",
    },
  ];

  return (
    <DraggableCardContainer>
      <div className="relative flex flex-wrap justify-center items-center gap-8 min-h-[40rem] w-full overflow-clip p-8 bg-gray-900 dark:bg-gray-950 rounded-2xl">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto max-w-sm text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 pointer-events-none select-none z-0">
          If it's your first day at Fight Club, you have to fight.
        </p>
        {items.map((item) => (
          <DraggableCardBody
            key={item.title}
            className="relative z-10 h-80 w-64 bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 rounded-xl shadow-xl flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none h-9/10 w-full object-cover rounded-t-xl"
            />
            <h3 className="h-1/10 mt-2 mb-2 text-center text-lg font-bold text-white drop-shadow-sm px-2">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </div>
    </DraggableCardContainer>
  );
}
