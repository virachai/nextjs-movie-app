// import type { Movie } from "@/types";
// import { findData } from "./findData";
// import MovieCard from "../../home/_components/MovieCard";

// export default async function MovieGrid() {
//   const movies = (await findData<Movie[]>("/movies/exclusive")) || [];

//   return (
//     <div className="mb-10">
//       {movies.length > 0 ? (
//         <div className="gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div>No movies found</div>
//       )}
//     </div>
//   );
// }
"use client";

import type { Movie } from "@/types";
import { findData } from "./findData";
import MovieCard from "../../home/_components/MovieCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieGrid() {
  const searchParams = useSearchParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const searchQuery = searchParams.get("q") || "";

      setLoading(true);
      const data = await findData<Movie[]>("/movies/search", {
        query: searchQuery, // Pass the query parameter as an object
      });
      setMovies(data || []);
      setLoading(false);
    };

    fetchMovies();
  }, [searchParams]); // Re-run when the searchParams change

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-10">
      {movies.length > 0 ? (
        <div className="gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
