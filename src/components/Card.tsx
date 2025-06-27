"use client";
import React from "react";
import { Content } from "@/types/Content";
import { Star, Heart } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardProps {
  content: Content;
}

export function Card({ content }: CardProps) {
  return (
    <BackgroundGradient className="rounded-2xl p-4 flex flex-col items-center bg-[#23272F] border border-cyan-900/40 shadow-lg">
      <img
        src={content.posterUrl}
        alt={content.title}
        className="w-full h-56 object-cover rounded-xl mb-4"
        loading="lazy"
      />
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="font-bold text-lg text-cyan-100 line-clamp-1 flex-1">
          {content.title}
        </h3>
        {content.isFavorite && (
          <span className="ml-2">
            <Heart className="h-5 w-5 text-red-500 fill-current" />
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <Star className="h-4 w-4 text-yellow-400 fill-current" />
        <span className="text-cyan-100 font-semibold text-sm">
          {content.rating}
        </span>
      </div>
      <p className="text-sm text-cyan-200/90 mb-3 line-clamp-3 text-center">
        {content.review}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {content.genre.slice(0, 3).map((genre, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium rounded-full bg-[#164E63] text-cyan-100 border border-cyan-900/40"
          >
            {genre}
          </span>
        ))}
      </div>
    </BackgroundGradient>
  );
}
