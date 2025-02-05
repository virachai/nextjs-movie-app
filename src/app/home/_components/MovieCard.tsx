// src/app/home/_components/MovieCard.tsx
import React from "react";
import Image from "next/image";
import MovieCardOverlay from "./MovieCardOverlay";
import { Movie } from "@/types";
import Link from "next/link";
import PlaceholderImage from "@/../public/placeholder.jpg";

interface MovieCardProps {
  movie: Movie;
  large?: boolean;
}

function MovieCard({ movie, large }: MovieCardProps) {
  const baseClasses =
    "relative cursor-pointer max-w-[280px] min-w-[100px] w-full";

  // Use aspect-ratio for large view
  const largeClasses = large ? "aspect-[10/15]" : "aspect-[10/15] sm:h-[130px]"; // For non-large view, keep default height

  // const largeClassesOverlay = large ? "aspect-[10/15]" : "aspect-[10/15]";
  const imageSrc = large ? movie.poster_path : movie.backdrop_path;

  return (
    <div className={`${baseClasses} ${largeClasses}`}>
      <Link href={`/movie/${movie.id}`} passHref>
        <Image
          src={PlaceholderImage}
          alt="Movie Placeholder"
          className="absolute object-cover"
          fill
        />

        <Image
          src={imageSrc}
          alt="Movie"
          className="sm:block absolute hidden object-cover"
          fill
        />
        <Image
          src={movie.poster_path}
          alt="Movie"
          className="absolute sm:hidden object-cover"
          fill
        />
      </Link>

      <div
        className={`hidden sm:flex relative opacity-0 hover:opacity-100 aspect-[10/15] transition duration-300 sm:hover:scale-125 hover:z-30`}
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
