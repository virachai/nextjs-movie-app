"use client";

import { PlusIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import VideoPlayerModal from "./VideoPlayerModal";

type Props = {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
};

export default function MovieButtons({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}: Props) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      {/* Play Button with Tailwind CSS */}
      <Button
        onClick={() => setIsPlayerOpen(true)}
        className="flex justify-center items-center bg-[white] hover:opacity-[0.95] px-6 py-2 rounded-md font-bold text-black text-lg hover:scale-105 transition-all duration-200 active:scale-100"
      >
        <PlayCircle className="mr-2 w-5 h-5" /> Play
      </Button>

      {/* More Info Button with Tailwind CSS */}
      <Button
        onClick={() => setIsPlayerOpen(true)}
        className="flex justify-center items-center bg-[#6d6e71cc] hover:bg-[#6d6e71d9] ml-2 px-6 py-2 rounded-md font-bold text-lg text-white hover:scale-105 transition-all duration-200 active:scale-100"
      >
        <PlusIcon className="mr-2 w-5 h-5" /> My list
      </Button>

      <VideoPlayerModal
        state={isPlayerOpen}
        changeState={setIsPlayerOpen}
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}
