export interface Content {
  id: string;
  title: string;
  posterUrl: string;
  category: "TV" | "Anime" | "Web Series";
  rating: number;
  review: string;
  watchStatus: "Completed" | "Watching" | "Dropped";
  isFavorite: boolean;
  dateWatched: string;
  genre: string[];
}

export type FilterType = "all" | "tv" | "web-series" | "anime" | "movies";
