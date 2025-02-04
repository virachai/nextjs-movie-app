"use client";

import { PlusIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types";
import Link from "next/link";
import { useState } from "react"; // Import useState

interface MovieButtonsProps {
  movie: Movie;
}

export default function MovieButtons({ movie }: MovieButtonsProps) {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to handle the modal confirmation
  const handleLogin = () => {
    // Redirect to login page (or show login form, depending on your app)
    // For now, we'll use a simple redirect to the login page.
    window.location.href = "/login"; // This could also be a <Link> component if you'd prefer
  };

  return (
    <>
      {/* Play Button wrapped with Link */}

      <Link href={`/movie/${movie.id}`} passHref>
        <Button className="flex justify-center items-center bg-white hover:bg-gray-200 px-6 py-2 rounded-md font-bold text-black text-lg hover:scale-105 transition-all duration-200 active:scale-100">
          <PlayCircle className="mr-2 w-5 h-5" /> Play
        </Button>
      </Link>

      {/* My List Button */}
      {!showModal && (
        <Button
          onClick={() => setShowModal(!showModal)} // Open the modal when clicked
          className="flex justify-center items-center bg-gray-700 hover:bg-gray-600 ml-2 px-6 py-2 rounded-md font-bold text-lg text-white hover:scale-105 transition-all duration-200 active:scale-100"
        >
          <PlusIcon className="mr-2 w-5 h-5" /> My list
        </Button>
      )}

      {/* Modal for Login Confirmation */}
      {showModal && (
        <div className="flex justify-center gap-2 ml-4">
          <Button
            onClick={() => setShowModal(false)}
            className="bg-gray-500 hover:bg-gray-600 px-6 py-2 text-white"
          >
            X
          </Button>
          <Button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white"
          >
            Log In
          </Button>
        </div>
      )}
    </>
  );
}
