import React from "react";
import { Grid3X3, Trophy, Heart, Tv } from "lucide-react";
import { FilterType } from "../types/Content";

interface TabNavigationProps {
  activeTab: FilterType;
  onTabChange: (tab: FilterType) => void;
  isDark: boolean;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
  isDark,
}) => {
  const tabs = [
    { id: "all" as FilterType, label: "All Content", icon: Grid3X3 },
    { id: "tv" as FilterType, label: "TV Shows", icon: Tv },
    { id: "web-series" as FilterType, label: "Web Series", icon: Grid3X3 },
    { id: "anime" as FilterType, label: "Anime", icon: Trophy },
    { id: "movies" as FilterType, label: "Movies", icon: Heart },
  ];

  return (
    <div className="flex justify-center">
      <div
        className={`
        inline-flex p-1 rounded-xl shadow-lg
        ${
          isDark
            ? "bg-gray-800 border border-gray-700"
            : "bg-white border border-gray-200"
        }
      `}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center space-x-2 px-6 py-3 rounded-lg font-medium
                transition-all duration-300 transform hover:scale-105
                ${
                  isActive
                    ? `${
                        isDark
                          ? "bg-blue-600 text-white"
                          : "bg-blue-500 text-white"
                      } shadow-lg`
                    : `${
                        isDark
                          ? "text-gray-300 hover:text-white hover:bg-gray-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`
                }
              `}
            >
              <Icon className="h-5 w-5" />
              <span className="font-semibold">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
