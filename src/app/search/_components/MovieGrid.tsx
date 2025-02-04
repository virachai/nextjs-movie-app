import type { Movie } from "@/types";
import { findData } from "./findData";
import MovieCard from "../../home/_components/MovieCard";

export default async function MovieGrid() {
  const movies = (await findData<Movie[]>("/movies/exclusive")) || [];

  return (
    <div className="mb-10">
      {movies.length > 0 ? (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
}
