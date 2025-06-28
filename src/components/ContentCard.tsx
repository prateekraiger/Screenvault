import React from "react";
import { Star, Heart } from "lucide-react";
import { Content } from "../types/Content";
import { BlurFade } from "./magicui/blur-fade";

interface ContentCardProps {
  content: Content;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "TV":
        return "bg-gradient-to-r from-cyan-700 to-cyan-900";
      case "Anime":
        return "bg-gradient-to-r from-teal-700 to-teal-900";
      case "Web Series":
        return "bg-gradient-to-r from-blue-700 to-blue-900";
      default:
        return "bg-gradient-to-r from-gray-700 to-gray-900";
    }
  };

  return (
    <BlurFade duration={0.9} blur="16px" offset={24}>
      <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 bg-transparent border border-cyan-900/40 hover:rotate-1 transform-gpu">
        {/* Poster Image */}
        <div className="relative overflow-hidden">
          <img
            src={content.posterUrl}
            alt={content.title}
            className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Favorite Badge */}
          {content.isFavorite && (
            <div className="absolute top-3 right-3 transform transition-transform duration-300 group-hover:scale-110">
              <div className="bg-red-500 p-2 rounded-full shadow-lg">
                <Heart className="h-4 w-4 text-white fill-current" />
              </div>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg ${getCategoryColor(
                content.category
              )}`}
            >
              {content.category}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-bold">
              {content.rating}
            </span>
          </div>
        </div>

        {/* Content Info */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-xl line-clamp-2 flex-1 leading-tight text-cyan-100">
              {content.title}
            </h3>
          </div>

          {/* Review */}
          <p className="text-sm line-clamp-3 leading-relaxed text-cyan-200/90">
            {content.review}
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {content.genre.slice(0, 3).map((genre, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#164E63] text-cyan-100 border border-cyan-900/40"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default ContentCard;
