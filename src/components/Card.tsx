import React from "react";

interface CardProps {
  id: string;
  title: string;
  posterUrl: string;
  category: string;
  rating: number;
  review: string;
  genre: string[];
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  posterUrl,
  category,
  rating,
  review,
  genre,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="w-full h-full group cursor-pointer">
      {/* Main Card */}
      <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl transition-all duration-700 ease-out hover:shadow-2xl hover:scale-[1.03] bg-gradient-to-br from-gray-900 to-black">
        {/* Movie Poster */}
        {!imageError ? (
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-20 h-20 fill-slate-400 mx-auto mb-4"
              >
                <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
              </svg>
              <p className="text-slate-400 text-sm">No Image Available</p>
            </div>
          </div>
        )}

        {/* Category Badge (top left, always visible) */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-gradient-to-r from-cyan-700 to-cyan-900 text-white text-xs font-bold rounded-full border border-white/10 shadow-lg">
            {category}
          </span>
        </div>

        {/* Rating Badge (top right, hide on hover) */}
        <div className="absolute top-4 right-4 z-20 transition-opacity duration-300 group-hover:opacity-0">
          <span className="px-3 py-1.5 bg-black bg-opacity-60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white border-opacity-20 shadow-lg">
            {rating}
          </span>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>

        {/* Title at Bottom (overlay) */}
        <div className="absolute bottom-0 left-0 w-full px-5 pb-5 pt-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-center">
          <h3 className="text-xl font-bold text-white text-center w-full truncate">
            {title}
          </h3>
        </div>

        {/* Hover Overlay: Review, Genres */}
        <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gradient-to-t from-black/95 via-black/80 to-transparent p-5 rounded-b-2xl">
            <p className="text-white/90 text-sm leading-relaxed mb-3 line-clamp-4">
              {review}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {genre.map((g, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
