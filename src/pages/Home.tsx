import React from "react";
import { FlipText } from "@/components/magicui/flip-text";
import { useNavigate } from "react-router-dom";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FaTv, FaGlobe, FaFilm, FaDragon } from "react-icons/fa";
import Featured from "@/components/ui/featured";

const routes = [
  {
    label: "Anime",
    path: "/anime",
    icon: <FaDragon className="w-8 h-8 text-pink-400 mb-3" />,
  },
  {
    label: "Movies",
    path: "/movies",
    icon: <FaFilm className="w-8 h-8 text-yellow-400 mb-3" />,
  },
  {
    label: "TV Shows",
    path: "/tv",
    icon: <FaTv className="w-8 h-8 text-cyan-400 mb-3" />,
  },
  {
    label: "Web Series",
    path: "/web-series",
    icon: <FaGlobe className="w-8 h-8 text-teal-400 mb-3" />,
  },
];

const categoryDescriptions: Record<string, string> = {
  "TV Shows":
    "Serialized television programs with recurring characters, multiple seasons, and diverse stories across genres.",
  "Web Series":
    "Episodic online content with unique storytelling, shorter seasons, and creative formats.",
  Anime:
    "Japanese animated shows or films known for vibrant art, fantasy worlds, and varied genres.",
  Movies:
    "Feature-length films from around the world, spanning all genres and storytelling styles.",
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent w-full overflow-x-hidden box-border">
      <div className="text-center mb-8 mt-12 w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 mx-auto overflow-x-hidden">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 break-words max-w-full mx-auto  text-wrap drop-shadow-2xl whitespace-pre-line">
          <FlipText className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 drop-shadow-lg text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-black whitespace-pre-line">
            {`Welcome to\nScreenVault`}
          </FlipText>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-cyan-100/80 px-1 break-words text-wrap">
          Welcome to Pratik's personal entertainment vault—every movie, TV show,
          web series, and anime here is part of his own watched collection. Dive
          in and explore your next favorite from Pratik's picks!
        </p>
      </div>

      <div className="flex justify-center w-full px-2 sm:px-4 lg:px-8 xl:px-10 2xl:px-12 min-w-0 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl min-w-0 overflow-x-hidden">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => navigate(route.path)}
              className="w-full min-w-0"
            >
              <BackgroundGradient className="rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 bg-[#23272F] border border-cyan-900/40 shadow-2xl group min-w-0 w-full max-w-xs mx-auto">
                {React.cloneElement(route.icon, {
                  className:
                    "w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3 " +
                    route.icon.props.className,
                })}
                <span className="text-base sm:text-2xl md:text-3xl font-extrabold text-cyan-100 mb-1 sm:mb-2 tracking-tight group-hover:text-cyan-300 transition-colors break-words text-wrap">
                  <FlipText>{route.label}</FlipText>
                </span>
                <span className="text-cyan-200/90 text-xs sm:text-base text-center mt-1 sm:mt-2 font-medium break-words text-wrap">
                  {categoryDescriptions[route.label]}
                </span>
              </BackgroundGradient>
            </button>
          ))}
        </div>
      </div>

      {/* Hall of Fame Section */}
      <div className="w-full flex flex-col items-center my-8 sm:my-14 md:my-20 px-2 sm:px-4 lg:px-8 xl:px-10 2xl:px-12 min-w-0 overflow-x-hidden">
        <div className="w-full bg-gray-900 dark:bg-gray-950 rounded-3xl shadow-2xl border-2 border-gray-800 p-4 sm:p-8 md:p-10 flex flex-col items-center min-h-[10rem] sm:min-h-[16rem] md:min-h-[20rem]">
          <h2 className="text-xl sm:text-4xl md:text-6xl font-extrabold mb-2 sm:mb-8 text-center text-white drop-shadow-lg tracking-tight break-words text-wrap max-w-xs sm:max-w-2xl mx-auto">
            Hall of Fame
          </h2>
          <div className="w-full flex justify-center min-w-0">
            <Featured />
          </div>
        </div>
      </div>
    </div>
  );
}
