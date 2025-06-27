import React from "react";
import { FlipText } from "@/components/magicui/flip-text";
import { mockContent } from "@/data/mockData";
import Card from "@/components/Card";

export default function WebSeriesPage() {
  const webSeries = mockContent.filter(
    (item) => item.category === "Web Series"
  );
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center my-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <FlipText>Web Series</FlipText>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
        {webSeries.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
