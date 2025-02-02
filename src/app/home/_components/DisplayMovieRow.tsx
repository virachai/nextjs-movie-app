import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { fetchUserWatchlist } from "./fetchUserWatchlist";
import MovieCard from "./MovieCard";
import type { Movie } from "@/types";

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions);
  const movies = await fetchUserWatchlist(session?.user?.email as string);

  return (
    <section className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
      {movies &&
        movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </section>
  );
}
