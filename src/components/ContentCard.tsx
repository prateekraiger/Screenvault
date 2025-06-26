import React from 'react';
import { Star, Heart, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Content } from '../types/Content';

interface ContentCardProps {
  content: Content;
  isDark: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, isDark }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Watching':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'Dropped':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'TV':
        return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'Anime':
        return 'bg-gradient-to-r from-pink-500 to-pink-600';
      case 'Web Series':
        return 'bg-gradient-to-r from-indigo-500 to-indigo-600';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`
      group relative overflow-hidden rounded-2xl shadow-xl
      transition-all duration-500 hover:shadow-2xl hover:scale-105
      ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}
      hover:rotate-1 transform-gpu
    `}>
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
          <span className={`
            px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg
            ${getCategoryColor(content.category)}
          `}>
            {content.category}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-bold">{content.rating}</span>
        </div>
      </div>

      {/* Content Info */}
      <div className="p-6 space-y-4">
        {/* Title and Status */}
        <div className="flex items-start justify-between">
          <h3 className={`
            font-bold text-xl line-clamp-2 flex-1 leading-tight
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            {content.title}
          </h3>
          <div className="ml-3 flex items-center space-x-1">
            {getStatusIcon(content.watchStatus)}
          </div>
        </div>

        {/* Watch Status */}
        <div className="flex items-center justify-between">
          <span className={`
            text-sm font-medium
            ${isDark ? 'text-gray-400' : 'text-gray-600'}
          `}>
            Status:
          </span>
          <span className={`
            text-sm font-bold px-2 py-1 rounded-full
            ${content.watchStatus === 'Completed' && 'text-green-600 bg-green-100'}
            ${content.watchStatus === 'Watching' && 'text-blue-600 bg-blue-100'}
            ${content.watchStatus === 'Dropped' && 'text-red-600 bg-red-100'}
          `}>
            {content.watchStatus}
          </span>
        </div>

        {/* Review */}
        <p className={`
          text-sm line-clamp-3 leading-relaxed
          ${isDark ? 'text-gray-300' : 'text-gray-700'}
        `}>
          {content.review}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2">
          {content.genre.slice(0, 3).map((genre, index) => (
            <span
              key={index}
              className={`
                px-3 py-1 text-xs font-medium rounded-full
                ${isDark 
                  ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
                }
              `}
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Date Watched */}
        <div className={`
          text-xs pt-2 border-t
          ${isDark ? 'text-gray-500 border-gray-700' : 'text-gray-400 border-gray-200'}
        `}>
          Watched on {new Date(content.dateWatched).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;