// src/app/home/_components/NavigationButtons.tsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";

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

export default NavigationButtons;
