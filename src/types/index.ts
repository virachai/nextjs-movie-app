export type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  release_year?: number;
  imageString?: string;
  age?: number;
  duration?: number;
  release?: number;
  youtubeString?: string;
  videoSource?: string;
  watchlists?: {
    id?: string;
    userId?: string;
    movieId?: number | null;
  }[];
};

export type MediaCategory = "recently" | "movies" | "shows";
