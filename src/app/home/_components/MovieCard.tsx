// src/app/home/_components/MovieCard.tsx
import React from "react";
import Image from "next/image";
import MovieCardOverlay from "./MovieCardOverlay";
import type { Movie } from "@/types";

interface MovieCardProps {
  movie: Movie;
  large?: boolean;
}

function MovieCard({ movie, large }: MovieCardProps) {
  const baseClasses =
    "relative cursor-pointer h-32 max-w-[280px] min-w-[100px] w-full";
  const largeClasses = large ? "h-80" : "";
  const largeClassesOverlay = large ? "h-80" : "h-56";
  const imageSrc = large ? movie.poster_path : movie.backdrop_path;

  return (
    <div className={`${baseClasses} ${largeClasses}`}>
      <Image
        src={imageSrc}
        alt="Movie"
        className="absolute object-cover"
        fill
      />

      <div
        className={`relative opacity-0 hover:opacity-100 w-full ${largeClassesOverlay} transition duration-300 hover:scale-125 hover:z-30`}
      >
        <div className="flex justify-center items-center bg-gradient-to-b from-transparent via-black/50 to-black size-full">
          <Image
            src={movie.poster_path}
            alt="Movie"
            fill
            className="-z-10 absolute object-cover"
          />

          <MovieCardOverlay movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
