import { PlusIcon, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types";
import Link from "next/link";

export default function MovieButtons({ id }: Movie) {
  return (
    <>
      {/* Play Button wrapped with Link */}
      <Link href={`/movie/${id}`} passHref>
        <Button className="flex justify-center items-center bg-[white] hover:opacity-[0.95] px-6 py-2 rounded-md font-bold text-black text-lg hover:scale-105 transition-all duration-200 active:scale-100">
          <PlayCircle className="mr-2 w-5 h-5" /> Play
        </Button>
      </Link>

      <Button className="flex justify-center items-center bg-[#6d6e71cc] hover:bg-[#6d6e71d9] ml-2 px-6 py-2 rounded-md font-bold text-lg text-white hover:scale-105 transition-all duration-200 active:scale-100">
        <PlusIcon className="mr-2 w-5 h-5" /> My list
      </Button>
    </>
  );
}
