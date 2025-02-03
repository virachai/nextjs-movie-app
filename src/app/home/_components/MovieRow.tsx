// src/app/home/_components/MovieRowWithEndpoint.tsx
import MovieSlider from "./MovieSlider";
import type { Movie } from "@/types";
import { fetchData } from "./fetchData";

interface MovieRowWithEndpointProps {
  title: string;
  endpoint: string;
  large?: boolean;
}

export default async function MovieRowWithEndpoint({
  title,
  endpoint,
  large,
}: MovieRowWithEndpointProps) {
  const movies = await fetchData<Movie[]>(endpoint);
  const moviesData =
    movies?.filter((elm: Movie, idx: number) => idx < 7 && elm) || [];

  return (
    <div className="mb-10">
      <h1 className="mb-3 font-bold text-2xl">{title}</h1>
      <MovieSlider movies={moviesData} large={large} />
    </div>
  );
}
