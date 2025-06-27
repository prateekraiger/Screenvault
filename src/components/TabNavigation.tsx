import React from "react";
import { Grid3X3, Trophy, Heart, Tv } from "lucide-react";
import { FilterType } from "../types/Content";

interface TabNavigationProps {
  activeTab: FilterType;
  onTabChange: (tab: FilterType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    { id: "all" as FilterType, label: "All Content", icon: Grid3X3 },
    { id: "tv" as FilterType, label: "TV Shows", icon: Tv },
    { id: "web-series" as FilterType, label: "Web Series", icon: Grid3X3 },
    { id: "anime" as FilterType, label: "Anime", icon: Trophy },
    { id: "Movie" as FilterType, label: "Movies", icon: Heart },
  ];

  return (
    <div className="flex justify-center w-full overflow-x-auto scrollbar-hide">
      <div className="inline-flex p-1 rounded-2xl shadow-2xl backdrop-blur-md bg-[#23272F]/80 border border-cyan-900/40 w-full max-w-full overflow-x-auto gap-2 sm:gap-0">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`group flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 text-white shadow-lg border-none"
                    : "bg-[#23272F]/60 text-cyan-100 border border-transparent hover:bg-[#164E63]/60"
                }
              `}
              style={{
                boxShadow: isActive
                  ? "0 4px 24px 0 rgba(34,211,238,0.25)"
                  : undefined,
                backdropFilter: "blur(8px)",
                minWidth: 90,
              }}
            >
              <Icon className="h-5 w-5" />
              <span className="transition-opacity duration-200 group-hover:opacity-0">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
