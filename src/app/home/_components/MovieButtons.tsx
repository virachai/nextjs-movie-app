"use client";

import { PlusIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types";
import Link from "next/link";
import { useState } from "react"; // Import useState to manage local state for the popup
import { redirect } from "next/navigation";

interface MovieButtonsProps {
  movie: Movie;
}

export default function MovieButtons({ movie }: MovieButtonsProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Assume the user is not logged in initially

  const handleMyListClick = () => {
    if (isLoggedIn) {
      // Logic for adding to the list, as the user is logged in.
      console.log("Added to My List");
    } else {
      setIsPopupOpen(true); // Show the popup if not logged in
    }
  };

  const handleLogin = () => {
    // Redirect or show login form (you can use a router here)
    console.log("Redirect to login");
    setIsPopupOpen(false); // Close the popup
    redirect("/login");
  };

  const handleCancel = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      {/* Play Button wrapped with Link */}
      <Link href={`/movie/${movie.id}`} passHref>
        <Button className="flex justify-center items-center bg-[white] hover:opacity-[0.95] px-6 py-2 rounded-md font-bold text-black text-lg hover:scale-105 transition-all duration-200 active:scale-100">
          <PlayCircle className="mr-2 w-5 h-5" /> Play
        </Button>
      </Link>

      {/* My List Button */}
      <Button
        onClick={handleMyListClick}
        className="flex justify-center items-center bg-[#6d6e71cc] hover:bg-[#6d6e71d9] ml-2 px-6 py-2 rounded-md font-bold text-lg text-white hover:scale-105 transition-all duration-200 active:scale-100"
      >
        <PlusIcon className="mr-2 w-5 h-5" /> My list
      </Button>

      {/* Popup Modal for Login Prompt */}
      {isPopupOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-[300px]">
            <h2 className="font-semibold text-black text-xl">Please Log In</h2>
            <p className="mt-4 text-black">
              You need to log in to add this movie to your list.
            </p>
            <div className="flex justify-between mt-6">
              <Button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md text-white"
              >
                Log In
              </Button>
              <Button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 px-6 py-2 rounded-md text-white"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
