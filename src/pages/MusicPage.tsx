/// <reference types="vite/client" />
export default function MusicPage() {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-32 mx-auto min-h-screen">
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          My Spotify Profile
        </h1>
        <p className="text-cyan-100/80 text-lg max-w-2xl mx-auto mt-2 mb-6">
          Explore my public Spotify profile and featured playlist—always
          visible, no login required!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
        {/* Profile Card */}
        <div className="rounded-2xl shadow-xl border border-cyan-900/40 bg-gradient-to-br from-[#23272F] to-[#191414] p-8 flex flex-col items-center">
          <img
            src="https://ik.imagekit.io/mtk2a0sx6/One%20piece.jpg" // Replace with your real profile image URL
            alt="N8king"
            className="w-36 h-36 rounded-full shadow-2xl mb-4 border-4 border-green-400 object-cover"
          />
          <div className="text-3xl font-bold text-green-300 mb-2">N8king</div>
          <a
            href="https://open.spotify.com/user/31krsjwznymlovmlk7cy2rv3nyry?si=f5f159e3af0046a9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform mb-2"
          >
            View My Spotify Profile
          </a>
          <div className="mt-4 text-cyan-200/80 text-center text-base">
            <span className="block mb-1">
              Spotify user, playlist curator, and music lover.
            </span>
            <span className="italic text-cyan-300 text-sm">
              “Music is the shorthand of emotion.”
            </span>
          </div>
        </div>
        {/* Playlist Card */}
        <div className="rounded-2xl shadow-xl border border-cyan-900/40 bg-gradient-to-br from-[#23272F] to-[#191414] p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-cyan-200 mb-4 text-center">
            Featured Playlist
          </h2>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-cyan-900/40">
            <iframe
              style={{ borderRadius: "12px", minHeight: 352 }}
              src="https://open.spotify.com/embed/playlist/3DAppenp4VT1F5dJpaa19u?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
