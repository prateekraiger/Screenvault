import { animeData } from "./animeData";
import { movieData } from "./movieData";
import { tvData } from "./tvData";
import { webSeriesData } from "./webSeriesData";
import { generateId } from "./generateId";
import { Content } from "../types/Content";

function addIds<T extends Omit<Content, "id">>(
  arr: T[],
  prefix: string
): Content[] {
  return arr.map((item) => ({ ...item, id: generateId(prefix) }));
}

export const mockContent: Content[] = [
  ...addIds(animeData, "anime"),
  ...addIds(movieData, "movie"),
  ...addIds(tvData, "tv"),
  ...addIds(webSeriesData, "webseries"),
];
