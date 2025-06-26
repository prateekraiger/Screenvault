import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  isDark: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, isDark }) => {
  return (
    <div className="relative flex-1 max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      <input
        type="text"
        placeholder="Search movies, shows, anime..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`
          block w-full pl-10 pr-3 py-2 border rounded-lg
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          ${isDark 
            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
          }
        `}
      />
    </div>
  );
};

export default SearchBar;