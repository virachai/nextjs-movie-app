import { findMovie } from "./findMovie.helper";
import MovieButtons from "./MovieButtons";
import type { Movie } from "@/types";
import PlaceholderImage from "@/../public/placeholder.svg";
import Image from "next/image";

export default async function MovieClip() {
  const data: Movie | null = await findMovie();

  if (!data) {
    return <h2 className="font-bold text-2xl text-center">Loading...</h2>;
  }

  // Fallback for backdrop image
  const movieImage =
    data.backdrop_path && data.backdrop_path !== ""
      ? data.backdrop_path
      : PlaceholderImage;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Volatile Billboard Animations Container */}
      <div className="relative top-0 right-0 left-0">
        {/* Billboard container with background color and aspect ratio */}
        <div className="relative z-0 bg-black w-full h-[56.25vw] min-h-[500px] max-h-[100vh] overflow-hidden">
          {/* Hero Image */}
          <Image
            className="static-image w-full h-full hero image-layer object-cover"
            src={movieImage}
            alt={data.title}
            fill
          />

          {/* Vignette layers for the dark overlay effect */}
          <div className="top-0 left-0 absolute from-[#141414] opacity-40 w-full h-full"></div>
          <div className="top-0 left-0 absolute bg-gradient-to-t from-[#141414] to-transparent w-full h-full"></div>
        </div>

        {/* Movie Information */}
        <div className="top-0 left-0 z-10 absolute flex justify-start items-center px-4 sm:px-8 lg:px-16 w-full min-w-[375px] h-full">
          <div className="top-0 bottom-0 z-10 absolute flex flex-col justify-end space-y-6 pb- pb-[160px] w-[80%] lg:w-2/5">
            <h1 className="font-extrabold text-3xl text-white sm:text-4xl lg:text-5xl leading-tight">
              {data.title}
            </h1>
            <p className="line-clamp-2 max-h-0 md:max-h-none text-lg text-white sm:text-xl">
              {data.overview}
            </p>

            <div className="flex gap-x-4 mt-6">
              <MovieButtons movie={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
