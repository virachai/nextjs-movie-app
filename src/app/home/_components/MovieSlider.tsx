"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // Import Swiper's styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCardOverlay from "./MovieCardOverlay";

// Define Movie type based on what's being used
type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
};

// Include MovieCard component definition directly
function MovieCard({ movie, large }: { movie: Movie; large?: boolean }) {
  const baseClasses =
    "relative cursor-pointer h-32 max-w-[240px] w-full";
  const largeClasses = large ? "h-60" : "";

  return (
    <div className={`${baseClasses} ${largeClasses}`}>
      <Image
        src={movie.backdrop_path}
        alt="Movie"
        className="absolute size-full rounded-sm object-cover"
        fill
      />
      <div className="relative z-10 h-32 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
        <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
          <Image
            src={movie.backdrop_path}
            alt="Movie"
            className="absolute -z-10 size-full rounded-lg object-cover"
            fill
          />

          <div className="relative z-10 h-60 w-full opacity-0 transition duration-300 hover:scale-110 hover:opacity-100">
            <div className="z-10 flex size-full items-center justify-center rounded-lg border bg-gradient-to-b from-transparent via-black/50 to-black">
              <Image
                src={movie.backdrop_path}
                alt="Movie"
                width={800}
                height={800}
                className="absolute -z-10 size-full rounded-lg object-cover"
              />

              <MovieCardOverlay movie={movie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom Navigation Buttons Component
const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div
        className="absolute left-0 top-1/2 z-20 -translate-y-1/2 cursor-pointer prev"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </div>
      <div
        className="absolute right-0 top-1/2 z-20 -translate-y-1/2 cursor-pointer next"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </div>
    </>
  );
};

const MovieSlider = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="relative w-full">
      {/* Swiper Container */}
      <Swiper
        slidesPerView={6} // Items per slide
        spaceBetween={10} // Gap between slides
        loop={true} // Enable looping of slides
        navigation={{ prevEl: ".prev", nextEl: ".next" }} // Navigation buttons
        breakpoints={{
          // Responsive breakpoints
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }} // Dots pagination
        className="swiper-container"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <NavigationButtons />
      </Swiper>
    </div>
  );
};

export default MovieSlider;
