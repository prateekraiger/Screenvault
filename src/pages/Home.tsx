import { FlipText } from "@/components/magicui/flip-text";
import { useNavigate } from "react-router-dom";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const routes = [
  { label: "TV Shows", path: "/tv" },
  { label: "Web Series", path: "/web-series" },
  { label: "Anime", path: "/anime" },
  { label: "Movies", path: "/movies" },
];

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
          Your personal entertainment hub. Choose a category to explore your
          favorite movies, TV shows, web series, or anime!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl px-4">
        {routes.map((route) => (
          <button
            key={route.path}
            onClick={() => navigate(route.path)}
            className="w-full"
          >
            <BackgroundGradient className="rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 bg-[#23272F] border border-cyan-900/40">
              <span className="text-3xl font-bold text-cyan-100 mb-2">
                <FlipText>{route.label}</FlipText>
              </span>
              <span className="text-cyan-200/80 text-lg">
                Go to {route.label}
              </span>
            </BackgroundGradient>
          </button>
        ))}
      </div>
    </div>
  );
}
