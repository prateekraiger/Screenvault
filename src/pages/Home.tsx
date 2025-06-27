import { FlipText } from "@/components/magicui/flip-text";
import { useNavigate } from "react-router-dom";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { FaTv, FaGlobe, FaFilm, FaDragon } from "react-icons/fa";

const routes = [
  {
    label: "TV Shows",
    path: "/tv",
    icon: <FaTv className="w-8 h-8 text-cyan-400 mb-3" />,
  },
  {
    label: "Anime",
    path: "/anime",
    icon: <FaDragon className="w-8 h-8 text-pink-400 mb-3" />,
  },
  {
    label: "Web Series",
    path: "/web-series",
    icon: <FaGlobe className="w-8 h-8 text-teal-400 mb-3" />,
  },
  {
    label: "Movies",
    path: "/movies",
    icon: <FaFilm className="w-8 h-8 text-yellow-400 mb-3" />,
  },
];

const categoryDescriptions: Record<string, string> = {
  "TV Shows":
    "Serialized programs broadcast on television, often with multiple seasons and episodes, telling ongoing stories or featuring recurring characters.",
  "Web Series":
    "Episodic content released primarily on the internet, often with unique storytelling styles and shorter seasons.",
  Anime:
    "Japanese animated series or films, known for their vibrant art, imaginative worlds, and diverse genres.",
  Movies:
    "Feature-length films from around the world, spanning every genre and style.",
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="text-center mb-12 mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          <FlipText className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 drop-shadow-lg md:text-8xl">
            Welcome to Screen Vault
          </FlipText>
        </h1>
        <p className="text-xl max-w-2xl mx-auto leading-relaxed text-cyan-100/80">
          Welcome to Pratik's personal entertainment vault—every movie, TV show,
          web series, and anime here is part of his own watched collection. Dive
          in and explore your next favorite from Pratik's picks!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl px-4">
        {routes.map((route) => (
          <button
            key={route.path}
            onClick={() => navigate(route.path)}
            className="w-full"
          >
            <BackgroundGradient className="rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 bg-[#23272F] border border-cyan-900/40 shadow-2xl group">
              {route.icon}
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-100 mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                <FlipText>{route.label}</FlipText>
              </span>
              <span className="text-cyan-200/90 text-base text-center mt-2 font-medium">
                {categoryDescriptions[route.label]}
              </span>
            </BackgroundGradient>
          </button>
        ))}
      </div>
    </div>
  );
}
