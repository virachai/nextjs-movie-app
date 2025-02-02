import { findMovie } from "./findMovie.helper";
import MovieButtons from "./MovieButtons";
import type { Movie } from "@/types";
import PlaceholderImage from "@/../public/placeholder.svg";
// import PlaceholderVideo from "@/../public/placeholder.mp4";

export default async function MovieClip() {
  const data: Movie | null = await findMovie();

  if (!data) {
    return <h2>Loading...</h2>;
  }

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    age,
    duration,
    release,
    youtubeString,
    videoSource,
    imageString,
  } = data;

  // Fallbacks in case properties are undefined or empty
  const movieImage =
    imageString && imageString !== "" ? imageString : PlaceholderImage;
  const videoSrc =
    videoSource && videoSource !== ""
      ? videoSource
      : "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4";

  return (
    <section className="flex justify-start items-center w-full h-[70vh] lg:h-[80vh]">
      {/* Video background */}
      {videoSrc && (
        <video
          // poster={backdrop_path}
          autoPlay
          muted
          loop
          src={videoSrc}
          className="top-0 brightness-[60%] left-0 -z-10 absolute w-full h-[60vh] object-cover"
        ></video>
      )}

      <div className="absolute mx-auto w-11/12 lg:w-2/5">
        <h1 className="font-bold text-4xl text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 line-clamp-3 text-lg text-white">{overview}</p>
        <div className="flex gap-x-3 mt-4">
          <MovieButtons
            age={age ?? 0} // Provide a fallback if age is undefined
            duration={duration ?? 0} // Provide a fallback if duration is undefined
            id={data.id}
            overview={overview}
            releaseDate={release || new Date().getFullYear()} // Fallback to the current year if release is undefined
            title={title}
            youtubeUrl={youtubeString || ""} // Provide an empty string if youtubeString is undefined
            key={data.id}
          />
        </div>
      </div>
    </section>
  );
}
