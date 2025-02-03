import React from "react";
import {
  ArrowLeft,
  ThumbsUp,
  Share,
  Plus,
  Clock,
  CalendarDays,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Movie } from "@/types";
import Image from "next/image";

interface MovieDetailPageProps {
  movie: Movie;
  similarMovies?: Movie[];
}

const MovieDetailPage: React.FC<MovieDetailPageProps> = ({
  movie,
  similarMovies = [],
}) => {
  const formatDuration = (minutes?: number) => {
    if (!minutes) return "";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Back Button */}
      <button className="absolute top-4 left-4 z-10 hover:bg-black/50 p-2 rounded-full">
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        <Image
          src={movie.backdrop_path}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>

          {/* Movie Meta Info */}
          <div className="flex items-center gap-4 text-sm mb-4">
            {movie.age && (
              <span className="border border-gray-400 px-2 py-0.5">
                {movie.age}+
              </span>
            )}
            {movie.duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{formatDuration(movie.duration)}</span>
              </div>
            )}
            {movie.release_year && (
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                <span>{movie.release_year}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Play Button */}
        <button className="w-full bg-white text-black py-3 rounded-md font-semibold mb-6 hover:bg-white/90 transition flex items-center justify-center gap-2">
          <span>▶</span> Play
        </button>

        {/* Overview */}
        <p className="text-gray-300 mb-8">{movie.overview}</p>

        {/* Action Buttons */}
        <div className="flex justify-around mb-12">
          <button className="flex flex-col items-center gap-2 hover:text-gray-300 transition">
            <Plus className="w-6 h-6" />
            <span className="text-sm">My List</span>
          </button>
          <button className="flex flex-col items-center gap-2 hover:text-gray-300 transition">
            <ThumbsUp className="w-6 h-6" />
            <span className="text-sm">Rate</span>
          </button>
          <button className="flex flex-col items-center gap-2 hover:text-gray-300 transition">
            <Share className="w-6 h-6" />
            <span className="text-sm">Share</span>
          </button>
        </div>

        {/* More Like This */}
        {similarMovies.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">More Like This</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {similarMovies.map((movie) => (
                <Card
                  key={movie.id}
                  className="bg-zinc-900 border-none hover:scale-105 transition duration-200"
                >
                  <CardContent className="p-0">
                    <Image
                      src={movie.poster_path}
                      alt={movie.title}
                      className="w-full aspect-[2/3] object-cover rounded-t-md"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{movie.title}</h3>
                      {movie.release_year && (
                        <p className="text-sm text-gray-400">
                          {movie.release_year}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetailPage;
