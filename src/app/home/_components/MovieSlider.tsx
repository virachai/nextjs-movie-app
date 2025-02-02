"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"; // Import Swiper's styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCardOverlay from "./MovieCardOverlay";
import type { Movie } from "@/types";

function MovieCard({ movie, large }: { movie: Movie; large?: boolean }) {
  const baseClasses =
    "relative cursor-pointer h-32 max-w-[230px] min-w-[200px] w-full";
  const largeClasses = large ? "h-60" : "";

  return (
    <div className={`${baseClasses} ${largeClasses}`}>
      <Image
        src={movie.backdrop_path}
        alt="Movie"
        className="z-[1] absolute object-cover"
        fill
      />

      <div className="z-10 absolute opacity-0 hover:opacity-100 w-full h-32 hover:h-56 transition duration-300 test-1 hover:scale-125">
        <div className="flex justify-center items-center bg-gradient-to-b from-transparent via-black/50 to-black border rounded-lg size-full">
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

// Custom Navigation Buttons Component
const NavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div
        className="top-1/2 left-0 z-10 absolute -translate-y-1/2 cursor-pointer prev"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </div>
      <div
        className="top-1/2 right-0 z-10 absolute -translate-y-1/2 cursor-pointer next"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </div>
    </>
  );
};

const MovieSlider = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="relative z-auto w-full">
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
            slidesPerView: 4,
          },
          480: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }} // Dots pagination
        className="z-auto swiper-container"
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
