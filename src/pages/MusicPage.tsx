/// <reference types="vite/client" />
import React, { useState } from "react";

export default function MusicPage() {
  // Static playlist data
  const demoPlaylist = {
    name: "My top tracks playlist",
    creator: "N8king",
    url: "https://open.spotify.com/playlist/0nPBmn6acfwCjiDYEmaCaN",
    tracks: [
      { title: "Sapphire", artist: "Ed Sheeran" },
      { title: "Sugar", artist: "Maroon 5" },
      {
        title: "Rockabye (feat. Sean Paul & Anne-Marie)",
        artist: "Clean Bandit, Anne-Marie, Sean Paul",
      },
      { title: "The Nights", artist: "Avicii" },
      { title: "Viva La Vida", artist: "Coldplay" },
    ],
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-32 mx-auto min-h-screen">
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            My Spotify
          </h1>
          <p className="text-cyan-100/80 text-lg max-w-2xl mx-auto mt-2 mb-6">
            Explore my public Spotify profile, currently playing song, featured
            playlist, and more—always visible, no login required!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mb-8">
          {/* 1. Profile Card */}
          <div className="rounded-2xl shadow-xl border border-cyan-900/40 bg-gradient-to-br from-[#23272F]/90 to-[#191414]/90 p-6 flex flex-col items-center backdrop-blur-md min-h-[340px]">
            <img
              src="https://ik.imagekit.io/mtk2a0sx6/One%20piece.jpg"
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
                "Music is the shorthand of emotion."
              </span>
            </div>
          </div>
          {/* 2. Demo Playlist Card (static) */}
          <div className="rounded-2xl shadow-xl border border-cyan-900/40 bg-gradient-to-br from-[#23272F]/90 to-[#191414]/90 p-6 flex flex-col items-center justify-center min-h-[340px] backdrop-blur-md">
            <h2 className="text-lg font-bold text-cyan-200 mb-2 text-center">
              {demoPlaylist.name}
            </h2>
            <div className="text-cyan-200 text-xs mb-2">
              By <span className="font-semibold">{demoPlaylist.creator}</span>
            </div>
            <ul className="mb-3 w-full max-w-xs text-left">
              {demoPlaylist.tracks.map((track, idx) => (
                <li key={idx} className="text-cyan-100 text-sm truncate mb-1">
                  <span className="font-semibold">{track.title}</span>{" "}
                  <span className="text-cyan-400">–</span>{" "}
                  <span>{track.artist}</span>
                </li>
              ))}
            </ul>
            <a
              href={demoPlaylist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold text-base shadow-lg hover:scale-105 transition-transform mt-2"
            >
              Open in Spotify
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start mb-16">
          {/* 3. Currently Playing Card (bigger) */}
          <div className="rounded-2xl shadow-xl border border-cyan-900/40 bg-gradient-to-br from-[#23272F]/90 to-[#191414]/90 p-6 flex flex-col items-center justify-center min-h-[352px] backdrop-blur-md">
            <h2 className="text-lg font-bold text-cyan-200 mb-3 text-center">
              Currently Playing
            </h2>
            <a
              href="https://spotify-github-profile.kittinanx.com/api/view?uid=31krsjwznymlovmlk7cy2rv3nyry&redirect=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://spotify-github-profile.kittinanx.com/api/view?uid=31krsjwznymlovmlk7cy2rv3nyry&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=true"
                alt="Spotify Currently Playing"
                className="mx-auto rounded-xl shadow-xl border border-cyan-900/40"
                style={{ maxWidth: 352, width: "100%", minHeight: 352 }}
              />
            </a>
          </div>
          {/* 4. Featured Playlist Card */}
          <div className="rounded-2xl shadow-xl border border-cyan-900/40 bg-gradient-to-br from-[#23272F]/90 to-[#191414]/90 p-6 flex flex-col items-center backdrop-blur-md min-h-[352px]">
            <h2 className="text-2xl font-bold text-cyan-200 mb-4 text-center">
              Featured Playlist
            </h2>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-cyan-900/40">
              <iframe
                style={{ borderRadius: "12px" }}
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
    </div>
  );
}
