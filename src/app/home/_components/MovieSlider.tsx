// src/app/home/_components/MovieSlider.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Movie } from "@/types";
import MovieCard from "./MovieCard";
import NavigationButtons from "./NavigationButtons";

interface MovieSliderProps {
  movies: Movie[];
  large?: boolean;
}

const MovieSlider = ({ movies, large }: MovieSliderProps) => {
  return (
    <div className="relative w-full">
      {/* Swiper Container */}
      <Swiper
        slidesPerView={6} // Items per slide
        spaceBetween={8} // Gap between slides
        loop={true} // Enable looping of slides
        navigation={{ prevEl: ".prev", nextEl: ".next" }} // Navigation buttons
        breakpoints={{
          // Responsive breakpoints
          1535: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 5,
          },
          640: {
            slidesPerView: 4,
          },
          350: {
            slidesPerView: large ? 2 : 3,
          },
          0: {
            slidesPerView: 2,
          },
        }}
        pagination={{ clickable: false }} // Dots pagination
        className="swiper-container"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} large={large} />
          </SwiperSlide>
        ))}
        <NavigationButtons />
      </Swiper>
    </div>
  );
};

export default MovieSlider;
