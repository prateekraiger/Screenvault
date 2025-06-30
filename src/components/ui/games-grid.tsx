import { Card } from "@/components/ui/card";

const VIDEO1 = "https://ik.imagekit.io/mtk2a0sx6/vd.mp4?tr=orig";
const VIDEO2 = "https://ik.imagekit.io/mtk2a0sx6/rdr.mp4?tr=orig";
const VIDEO3 = "https://ik.imagekit.io/mtk2a0sx6/vd.mp4?tr=orig";
const VIDEO4 = "https://ik.imagekit.io/mtk2a0sx6/vd.mp4?tr=orig";

const games = [
  {
    name: "Valorant",
    video: VIDEO1,
    colSpan: "col-span-2 md:col-span-3 md:rounded-tl-2xl",
  },
  {
    name: "Red Dead Redemption",
    video: VIDEO2,
    colSpan: "col-span-2 md:col-span-2 md:rounded-tr-2xl",
  },
  {
    name: "Valorant",
    video: VIDEO3,
    colSpan: "col-span-2 md:col-span-2 md:rounded-bl-2xl",
  },
  {
    name: "Valorant",
    video: VIDEO4,
    colSpan: "col-span-2 md:col-span-3 md:rounded-br-2xl",
  },
];

export function Features() {
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
                <div className="relative w-full flex-1 flex items-center justify-center">
                  <video
                    src={game.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-t-2xl"
                    style={{ height: "100%" }}
                  />
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
