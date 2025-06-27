import React from "react";
import { FlipText } from "@/components/magicui/flip-text";
import { mockContent } from "@/data/mockData";
import { Card } from "@/components/Card";

export default function AnimePage() {
  const anime = mockContent.filter((item) => item.category === "Anime");
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <FlipText>Anime</FlipText>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {anime.map((item) => (
          <Card key={item.id} content={item} />
        ))}
      </div>
    </div>
  );
}
