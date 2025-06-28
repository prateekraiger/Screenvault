import { FlipText } from "@/components/magicui/flip-text";
import Card from "@/components/Card";
import { useLocation } from "react-router-dom";
import { movieData } from "@/data/movieData";
import { webSeriesData } from "@/data/webSeriesData";
import { animeData } from "@/data/animeData";
import { tvData } from "@/data/tvData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function AllContentPage() {
  const query = useQuery();
  const search = query.get("search")?.toLowerCase() || "";

  // Combine all content
  const allContent = [
    ...movieData.map((item) => ({ ...item, category: "Movie" })),
    ...webSeriesData.map((item) => ({ ...item, category: "Web Series" })),
    ...animeData.map((item) => ({ ...item, category: "Anime" })),
    ...tvData.map((item) => ({ ...item, category: "TV" })),
  ];

  // Filter by search
  const filtered = search
    ? allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(search) ||
          item.review.toLowerCase().includes(search) ||
          item.genre.some((g) => g.toLowerCase().includes(search))
      )
    : allContent;

  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16 2xl:px-32 mx-auto">
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <FlipText>All Content</FlipText>
        </h1>
        <p className="text-cyan-200/80 text-lg max-w-2xl mx-auto">
          Search and explore all movies, web series, anime, and TV shows in one
          place.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-cyan-300 text-xl py-12">
            No results found.
          </div>
        ) : (
          filtered.map((item, idx) => <Card key={item.title + idx} {...item} />)
        )}
      </div>
    </div>
  );
}
