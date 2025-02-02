// src/app/home/_components/MovieCard.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Movie } from "@/types";

// import MovieCardOverlay from "./MovieCardOverlay";

type Props = {
  movie: Movie;
  large?: boolean;
};

export default function MovieCard({ movie, large }: Props) {
  return (
    <div
      className={cn("relative cursor-pointer h-32 w-64", {
        "h-60": large,
      })}
    >
      <Image
        src={movie.backdrop_path}
        alt="Movie"
        className="absolute size-full rounded-sm object-cover"
        fill
      />

      <div className="relative z-10 h-32 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
        <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            src={movie.backdrop_path}
            alt="Movie"
            className="absolute -z-10 size-full rounded-lg object-cover"
            fill
          />

          {/* <MovieCardOverlay movie={movie} /> */}
        </div>
      </div>
    </div>
  );
}
