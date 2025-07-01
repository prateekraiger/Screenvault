import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const VIDEO1 = "https://ik.imagekit.io/mtk2a0sx6/valorant.mp4?tr=orig";
const VIDEO2 = "https://ik.imagekit.io/mtk2a0sx6/rdr.mp4?tr=orig";
const VIDEO3 = "https://ik.imagekit.io/mtk2a0sx6/clip2.mp4";
const VIDEO4 = "https://ik.imagekit.io/mtk2a0sx6/human-torch.mp4?tr=orig";

const THUMB1 =
  "https://i.pinimg.com/736x/7f/84/7b/7f847bdbef8f1531ceae15efb9aefb05.jpg";
const THUMB2 = "https://images6.alphacoders.com/139/thumbbig-1397426.webp";
const THUMB3 =
  "https://i.pinimg.com/736x/fe/c7/5e/fec75eadc8039bb627d7058c8a735481.jpg";
const THUMB4 = "https://images2.alphacoders.com/138/thumb-440-1386593.webp";

const games = [
  {
    name: "Valorant",
    video: VIDEO1,
    poster: THUMB1,
    colSpan: "col-span-2 md:col-span-3 md:rounded-tl-2xl",
  },
  {
    name: "Red Dead Redemption",
    video: VIDEO2,
    poster: THUMB2,
    colSpan: "col-span-2 md:col-span-2 md:rounded-tr-2xl",
  },
  {
    name: "Valorant v2",
    video: VIDEO3,
    poster: THUMB3,
    colSpan: "col-span-2 md:col-span-2 md:rounded-bl-2xl",
  },
  {
    name: "Marvel Rivals",
    video: VIDEO4,
    poster: THUMB4,
    colSpan: "col-span-2 md:col-span-3 md:rounded-br-2xl",
  },
];

export function Features() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Toggle play/pause on click (for mobile/tap)
  const handleToggle = (idx: number) => {
    if (playingIdx === idx) {
      handlePause(idx);
    } else {
      handlePlay(idx);
    }
  };

  const handlePlay = (idx: number) => {
    setPlayingIdx(idx);
    videoRefs.current.forEach((video, i) => {
      if (video && i !== idx) {
        video.pause();
        video.currentTime = 0;
      }
    });
    const video = videoRefs.current[idx];
    if (video) {
      video.play();
    }
  };

  const handlePause = (idx: number) => {
    setPlayingIdx(null);
    const video = videoRefs.current[idx];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="py-8 md:py-12 w-full">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {games.map((game, idx) => (
            <div
              key={idx}
              className={`${game.colSpan} flex flex-col items-stretch`}
            >
              <Card className="group overflow-hidden border-none shadow-lg flex flex-col h-[220px] sm:h-[260px] md:h-[340px] bg-zinc-900 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl rounded-2xl">
                <div
                  className="relative w-full flex-1 flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => handlePlay(idx)}
                  onMouseLeave={() => handlePause(idx)}
                  onClick={() => handleToggle(idx)}
                >
                  {playingIdx === idx ? (
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      src={game.video}
                      poster={game.poster}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      webkit-playsinline="true"
                      className="w-full h-full object-cover rounded-t-2xl"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  ) : (
                    <>
                      <img
                        src={game.poster}
                        alt={game.name + " thumbnail"}
                        className="w-full h-full object-cover rounded-t-2xl"
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-12 h-12 text-cyan-200 opacity-80"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </Card>
              <div className="w-full text-center mt-2">
                <span className="font-bold text-cyan-200 text-base md:text-lg drop-shadow-sm">
                  {game.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
