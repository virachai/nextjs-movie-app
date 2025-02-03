// src/app/home/_components/MovieCard.tsx
import React from "react";
import Image from "next/image";
import MovieCardOverlay from "./MovieCardOverlay";
import { Movie } from "@/types";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
  large?: boolean;
}

function MovieCard({ movie, large }: MovieCardProps) {
  const baseClasses =
    "relative cursor-pointer max-w-[280px] min-w-[100px] w-full";
  const largeClasses = large ? "h-80" : "h-[130px]";
  const largeClassesOverlay = large ? "h-80" : "h-56";
  const imageSrc = large ? movie.poster_path : movie.backdrop_path;

  return (
    <div className={`${baseClasses} ${largeClasses}`}>
      <Link href={`/movie/${movie.id}`} passHref>
        <Image
          src={imageSrc}
          alt="Movie"
          className="hidden sm:block absolute object-cover"
          fill
        />
        <Image
          src={movie.poster_path}
          alt="Movie"
          className="sm:hidden absolute object-cover"
          fill
        />
      </Link>

      <div
        className={`hidden sm:flex relative opacity-0 hover:opacity-100 ${largeClassesOverlay} transition duration-300 sm:hover:scale-125 hover:z-30`}
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
