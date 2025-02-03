// src/app/home/_components/MovieContainer.tsx
import MovieSlider from "./MovieRow";

export default async function MovieContainer() {
  return (
    <div className="relative z-20 flex flex-col-reverse mt-[-100px] px-[1.5rem] sm:px-8 lg:px-16 pt-4 pb-52 w-full overflow-hidden">
      <MovieSlider title={"My list"} endpoint="/movies/my-list?profileId=2" />
      <MovieSlider
        title={"Only on NETFLIX"}
        endpoint="/movies/exclusive"
        large={true}
      />
      <MovieSlider
        title={"Continue Watching for DH"}
        endpoint="/movies/continue-watching?profileId=1"
      />
      <MovieSlider title={"Must-Watch"} endpoint="/movies/must-watch" />
      <MovieSlider title={"Popular on Netflix"} endpoint="/movies/trending" />
    </div>
  );
}
