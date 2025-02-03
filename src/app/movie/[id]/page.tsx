"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ThumbsUp, Share, Plus, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { Movie } from "@/types";
import PlaceholderImage from "@/../public/placeholder.svg";

// Mock data for similar movies
const similarMoviesMock = [
  {
    id: 277834,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280//iYLKMV7PIBtFmtygRrhSiyzcVsF.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
    title: "Moana",
    overview:
      "In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.",
    release_date: "2016-10-13",
    genre_ids: [12, 35, 10751, 16],
    release_year: 2016,
  },
  {
    id: 823219,
    backdrop_path:
      "https://image.tmdb.org/t/p/w1280//b3mdmjYTEL70j7nuXATUAD9qgu4.jpg",
    poster_path:
      "https://image.tmdb.org/t/p/w500//imKSymKBK7o73sajciEmndJoVkR.jpg",
    title: "Flow",
    overview:
      "A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.",
    release_date: "2024-08-29",
    genre_ids: [16, 14, 12],
    release_year: 2024,
  },
];

const MovieDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams(); // Use `useParams` to get the dynamic route parameter

  const [movie, setMovie] = useState<Movie | null>(null);
  const [similarMovies] = useState<Movie[]>(similarMoviesMock); // Use the mock data directly
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const BASE_API = process.env.BASE_API || "http://localhost:4000"; // Default fallback if BASE_API isn't set

  useEffect(() => {
    if (!id) return; // Ensure that `id` is available before making API request

    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`${BASE_API}/movies/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, BASE_API]); // Dependency on `id` and `BASE_API` ensures it runs when either changes

  const handleBack = () => {
    router.back();
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    ); // Show a loading indicator

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="bg-zinc-900 text-white min-h-screen relative">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 z-10 hover:bg-black/50 p-2 rounded-full transition"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Hero Section */}
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-zinc-900" />
        <div className="absolute inset-0">
          <Image
            src={movie?.backdrop_path || PlaceholderImage}
            alt={movie?.title || "Movie"}
            className="hidden sm:block absolute object-cover"
            fill
            sizes="100vw"
          />
          <Image
            src={movie?.poster_path || PlaceholderImage}
            alt={movie?.title || "Movie"}
            className="sm:hidden absolute object-cover"
            fill
            sizes="100vw"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie?.title}
            </h1>

            {/* Movie Meta Info */}
            <div className="flex items-center gap-4 text-sm mb-4">
              {movie?.release_year && (
                <div className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" />
                  <span>{movie.release_year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-6 py-8 max-w-7xl mx-auto">
        {/* Play Button */}
        <button className="w-full md:w-auto md:px-12 bg-white text-black py-3 rounded-md font-semibold mb-6 hover:bg-white/90 transition flex items-center justify-center gap-2">
          <span>▶</span> Play
        </button>

        {/* Overview */}
        <p className="text-gray-300 mb-8 text-lg">{movie?.overview}</p>

        {/* Action Buttons */}
        <div className="flex justify-around md:justify-start md:gap-12 mb-12">
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
                  className="bg-zinc-800 border-none hover:scale-105 transition duration-200"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[2/3]">
                      <Image
                        src={movie.poster_path}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-t-md"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
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
