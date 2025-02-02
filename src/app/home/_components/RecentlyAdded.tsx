import { fetchUserWatchlist } from "./fetchUserWatchlist";
import MovieSlider from "./MovieSlider";
import type { Movie } from "@/types";

export default async function RecentlyAdded() {
  const movies = await fetchUserWatchlist(1);
  const trendingMovies =
    movies?.filter((elm: Movie, idx: number) => idx < 10 && elm) || [];

  return (
    <div className="mb-10">
      <h1 className="font-bold text-2xl mb-3">Trending Now</h1>
      <MovieSlider movies={trendingMovies} />
    </div>
  );
}
