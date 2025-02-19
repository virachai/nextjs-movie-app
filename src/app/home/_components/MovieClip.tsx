import { findMovie } from "./findMovie.helper";
import MovieButtons from "./MovieButtons";
import type { Movie } from "@/types";
import PlaceholderImage from "@/../public/placeholder.jpg";
import Image from "next/image";

export default async function MovieClip() {
  const data: Movie | null = await findMovie();

  if (!data) {
    return <h2 className="font-bold text-2xl text-center">Loading...</h2>;
  }

  // Fallback for backdrop image
  const movieImage =
    data.backdrop_path && data.backdrop_path !== ""
      ? data.backdrop_path.replace("/w154/", "/w1280/")
      : PlaceholderImage;

  // Replace '/w154' with '/w1500' for the poster image
  const posterImageUrl = data.poster_path
    ? data.poster_path.replace("/w92/", "/w500/")
    : movieImage;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Volatile Billboard Animations Container */}
      <div className="top-0 right-0 left-0 relative">
        {/* Billboard container with background color and aspect ratio */}
        <div className="z-0 relative bg-black w-full h-[56.25vw] min-h-[500px] max-h-[100vh] overflow-hidden">
          {/* Hero Image */}
          <Image
            className="hidden sm:block static-image w-full h-full object-cover hero image-layer"
            src={movieImage}
            alt={data.title}
            fill
          />

          {/* Hero Image for small screens */}
          <Image
            className="sm:hidden w-full h-full object-cover hero image-layer tatic-image"
            src={posterImageUrl || movieImage}
            alt={data.title}
            fill
          />

          {/* Vignette layers for the dark overlay effect */}
          {/* <div className="top-0 left-0 absolute bg-[#141414] opacity-40 w-full h-full"></div> */}
          <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-[#141414] to-transparent w-full h-1/2"></div>
        </div>

        {/* Movie Information */}
        <div className="top-0 left-0 z-10 absolute flex justify-start items-center px-4 sm:px-8 lg:px-16 w-full min-w-[375px] h-full">
          <div className="top-0 bottom-0 z-10 absolute flex flex-col justify-end space-y-6 pb-[120px] md:pb-[130px] w-[90%] lg:w-2/5">
            <h1 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {data.title}
            </h1>
            <p className="absolute md:relative max-h-0 md:max-h-none text-white text-lg sm:text-xl line-clamp-2">
              {data.overview}
            </p>

            <div className="flex gap-x-3 md:mt-6">
              <MovieButtons movie={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
