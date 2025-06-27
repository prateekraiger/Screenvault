export interface Content {
  id: string;
  title: string;
  posterUrl: string;
  category: "TV" | "Anime" | "Web Series" | "Movie";
  rating: number;
  review: string;
  isFavorite: boolean;
  genre: string[];
}

export type FilterType = "all" | "tv" | "web-series" | "anime" | "Movie";
