// src/app/home/_components/MovieContainer.tsx
import MovieGid from "./MovieGrid";

export default async function MovieContainer() {
  return (
    <div className="relative z-20 flex flex-col px-[1.5rem] sm:px-8 lg:px-16 pt-4 pb-12 sm:pb-52 w-full overflow-visible">
      <MovieGid />
    </div>
  );
}
