import { Card, CardContent, CardHeader } from "@/components/ui/card";

const GAME_VIDEO = "https://ik.imagekit.io/mtk2a0sx6/vd.mp4?tr=orig";

export function Features() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="mx-auto w-full max-w-7xl px-2 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-12 drop-shadow-lg text-center tracking-tight select-none pointer-events-none">
          My Favorite Games
        </h2>
        <div className="mx-auto grid gap-4 sm:grid-cols-5">
          {/* 1: Video Card */}
          <Card className="group overflow-hidden border-zinc-700 shadow-black/10 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl flex flex-col justify-between">
            <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-black">
              <video
                src={GAME_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="md:p-6">
                <p className="font-bold text-cyan-200 text-xl mb-2">Valorant</p>
                <p className="text-cyan-100/80 mt-1 max-w-sm text-sm">
                  A tactical 5v5 character-based shooter blending precise
                  gunplay and unique abilities. My go-to competitive FPS for PC!
                </p>
              </div>
            </CardHeader>
          </Card>
          {/* 2: Video Card */}
          <Card className="group overflow-hidden border-zinc-700 shadow-black/10 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl flex flex-col justify-between">
            <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-black">
              <video
                src={GAME_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="mt-auto h-fit flex flex-col items-center">
              <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-bold text-cyan-200 sm:text-2xl md:p-6">
                Marvel Rivals
              </p>
              <p className="mt-2 text-cyan-100/80 text-center text-sm max-w-xs">
                A new 6v6 team-based PVP shooter featuring iconic Marvel heroes
                and villains. Fast, fun, and full of superpowers!
              </p>
            </CardContent>
          </Card>
          {/* 3: Video Card */}
          <Card className="group p-0 border-zinc-700 shadow-black/10 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-0 flex flex-col justify-between">
            <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-black">
              <video
                src={GAME_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="flex flex-col items-center">
              <p className="mx-auto mb-4 max-w-md text-balance text-center text-lg font-bold text-cyan-200 sm:text-2xl">
                Red Dead Redemption
              </p>
              <p className="text-cyan-100/80 text-center text-sm max-w-xs">
                An epic tale of life in America at the dawn of the modern age.
                Stunning open world, gripping story, and unforgettable
                characters.
              </p>
            </CardContent>
          </Card>
          {/* 4: Video Card */}
          <Card className="group relative border-zinc-700 shadow-black/10 sm:col-span-3 sm:rounded-none sm:rounded-br-xl flex flex-col justify-between">
            <div className="relative w-full h-64 md:h-80 flex items-center justify-center bg-black">
              <video
                src={GAME_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className="p-6 md:p-12">
              <p className="font-bold text-cyan-200 text-xl mb-2">Valorant</p>
              <p className="text-cyan-100/80 mt-1 max-w-sm text-sm">
                My favorite competitive shooter for PC. Always a thrill to play
                with friends and climb the ranks!
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
