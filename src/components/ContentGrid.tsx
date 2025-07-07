import React from "react";
import { Content } from "../types/Content";
import ContentCard from "./ContentCard";

interface ContentGridProps {
  content: Content[];
}

const ContentGrid: React.FC<ContentGridProps> = ({ content }) => {
  if (content.length === 0) {
    return (
      <div className="text-center py-20 space-y-4 text-cyan-100/80">
        <div className="text-6xl mb-4"></div>
        <h3 className="text-2xl font-semibold">No content found</h3>
        <p className="text-lg">
          Try adjusting your search terms or browse other tabs.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {content.map((item) => (
        <ContentCard key={item.id} content={item} />
      ))}
    </div>
  );
};

export default ContentGrid;
